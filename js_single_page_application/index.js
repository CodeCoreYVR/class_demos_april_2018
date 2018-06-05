const DOMAIN_URL = 'http://localhost:3000';
const API_PATH   = 'api/v1';
const BASE_URL   = `${DOMAIN_URL}/${API_PATH}`; 

const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`,
    {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    }
  ).then((response) => response.json());
  },
  one(id) {
    return fetch(`${BASE_URL}/questions/${id}`,
              {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
              }
          ).then(response => response.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(params)
      }
    ).then(response => response.json())
  }
}

const Session = {
  create(credentials) {
   return fetch(`${BASE_URL}/session`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  credentials: 'include',
                  body: JSON.stringify(credentials)
                }).then( response => response.json()) 
  }
}

function qsA(selector) {
  return document.querySelectorAll(selector);
}

function qs(selector) {
  return document.querySelector(selector);
}

function navigateTo(id) {
  qsA('.page').forEach( (node) => {
    if(id === node.id) {
      node.classList.add('visible');
    } else {
      node.classList.remove('visible');
    }
  });
}

function fetchAllQuestions() {
  Question
  .all()
  .then((questions) => {
    const questionsHTML = `
      <ul>
        ${questions.map( (question) => {
          return `
              <li>
                <a href='#' data-id='${question.id}'>${question.title}</a>
              </li>
          `} ).join(' ')}
      </ul>
    `;
    qs('#questions-list').innerHTML = questionsHTML;
  });
}

function fetchAndNavigate(questionId) {
  Question.one(questionId).then( (question) => {
    console.log(question);
    const questionHTML = `
      <div>
        <h1>${question.title}</h1>
        <p>${question.body}</p>
        <p>${question.author.full_name}</p>
        <h2>Answers</h2>
        ${question.answers.map( (ans) => `<p>${ans.body}</p>` ).join(' ')}
      </div>
    `;
    qs('#question-show-page').innerHTML = questionHTML;
    navigateTo('question-show-page');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  qsA('nav a').forEach( (node) => {
    node.addEventListener('click', (event) => {
      event.preventDefault();
      const { target } = event;
      const targetId = target.dataset.targetId;
      navigateTo(targetId);
    });
  });

  qs('#questions-list').addEventListener('click', (event) => {
    const { target } = event;
    if(target.matches('a[data-id]')) {
      fetchAndNavigate(target.dataset.id);
    }
  });

  qs('#session-new-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    Session
    .create({ email: formData.get('email'), password: formData.get('password')})
    .then(data => {
      navigateTo('question-index-page');
      fetchAllQuestions();
    })
    .catch( err => alert('Wrong Credentials!'));
  });

  qs('#question-new-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = { question: { title: formData.get('title'), 
                                 body: formData.get('body') } }
    Question.create(params).then( (data) => {
      if(data.errors) {
        alert(data.errors.join(', '));
      } else {
        fetchAndNavigate(data.id);
      }
    })
  });

});