function addingEventListener() {
    const button = document.getElementById('button');
  
    function handleClick() {
      console.log('Button clicked!');
    }
  
    button.addEventListener('click', handleClick);
  }