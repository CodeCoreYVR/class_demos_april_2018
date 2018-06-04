// Write chatr code here!

// Resource: Messages
// URL endpoints for Messages
// Messages#index -> GET /messages
// Messages#create -> POST /messages
// Messages#update -> PATCH /messages/:id
// Messages#destroy -> DELETE /messages/:id

// db columns for messages are:
// - content:text
// - flagged:bool
// - id:int
// - username:string
// - created_at:datetime
// - updated_at:datetime

// Using Fetch

// fetch is a function that is part of the browser API like setTimeout.
// It's asynchronous. Use it make HTTP requests and receive responses
// in a promise.

// By default, fetch will make a GET request to the URL given as its
// first argument. It can optionally take an object as a second
// to configure the request further.

// Example usage:
/*
// To parse the response body as json
fetch("/messages")
  .then(response => response.json())
  .then(console.table);

// To parse the response body as text
fetch("/messages")
	.then(response => response.text())
	.then(console.log)
*/

// HTTP Request Functions

function getMessages() {
  return fetch(`/messages`).then(res => res.json());
}

function createMessage(params) {
  return fetch("/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  });
}

function deleteMessage(id) {
  return fetch(`/messages/${id}`, { method: "DELETE" });
}

// DOM Utility Functions

function qS(query, node = document) {
  return node.querySelector(query);
}

function qSA(query, node = document) {
  return node.querySelectorAll(query);
}

// DOM Manipulation

function refreshMessages() {
  return getMessages().then(messages => {
    qS("ul#messages").innerHTML = messages
      .map(
        m => `
        <li>
          <p>${m.content}</p>
          <small>
            <span>${m.id}</span>
            •
            <a class="btn-delete" data-id="${m.id}" href>Delete</a>
          </small>
        </li>
      `
      )
      .join("");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  refreshMessages();
  setInterval(refreshMessages, 1000);

  qS("form#new-message").addEventListener("submit", event => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    createMessage({ content: formData.get("content") }).then(refreshMessages);
  });

  qS("ul#messages").addEventListener("click", event => {
    const { target } = event;

    const btnDelete = target.closest(".btn-delete");

    if (btnDelete) {
      event.preventDefault();
      // console.log(btnDelete.getAttribute("data-id"));

      // Any html attribute on a node that begins
      // with `data-` will have the text following
      // `data-` be a key in the .dataset object of the node.
      console.log(btnDelete.dataset);
      deleteMessage(btnDelete.dataset.id).then(refreshMessages);
    }
  });
});

// Chat-Battle Solutions

function createMessage(text) {
  return fetch("/messages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      body: text
    })
  });
}

//

fetch(`/messages`)
  .then(res => res.json())
  .then(ms => console.log(ms.length));

function replaceMessage(id, text) {
  return fetch(`/messages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      body: text
    })
  });
}

function deleteMessage(id) {
  return fetch(`/messages/${id}`, {
    method: "DELETE"
  });
}

function copyMessage(id) {
  return fetch(`/messages`)
    .then(res => res.json())
    .then(messages => {
      const message = messages.find(m => m.id === id);
      return createMessage(message.body);
    });
}
