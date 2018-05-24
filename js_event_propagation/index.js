// Event Propagation

// Demo

function eventLogger(event) {
  const { currentTarget, eventPhase } = event;
  const { id, tagName, className } = currentTarget;

  if (currentTarget.matches("#toxic-tim")) {
    // Use the .stopPropagation() to prevent and event from
    // triggering listeners that happen after this one.
    event.stopPropagation();
  }

  // The event object has a property, eventPhase, which
  // holds an integer that corresponds to the current
  // phase of the event as follows:
  // AT_TARGET : 2
  // BUBBLING_PHASE : 3
  // CAPTURING_PHASE : 1
  // NONE : 0

  const phases = {
    "1": "Capturing",
    "2": "At Target",
    "3": "Bubbling",
    "0": "None"
  };

  console.log(`${tagName}#${id}.${className} Phase: ${phases[eventPhase]}`);
}

document.querySelectorAll("*").forEach(node => {
  // By default, event listeners trigger only on the bubbling phase
  node.addEventListener("click", eventLogger);
  // Optionally, they can be made to trigger on the capturing
  // phase. To do this, set a third argument to .addEventListener
  // of `true` as shown below:
  node.addEventListener("click", eventLogger, true);
});
