let dogFact;
const factElement = document.querySelector('.fact span');
const pawButton = document.querySelector('button');

const fetchDogFact = async () => {
  try {
    const resp = await fetch('https://dogapi.dog/api/v2/facts');
    const json = await resp.json()
    const fact = json.data[0].attributes.body
    return fact
  } catch (e) {
    console.log('We have it an error', e);
  }
}

const insertDogFact = async() => {
  const dogFact = await fetchDogFact()
  factElement.textContent = dogFact;
}

pawButton.addEventListener('click', () => {
  insertDogFact()
})