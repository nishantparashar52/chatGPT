// Import stylesheets
import './style.css';

// Write Javascript code!
const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', async () => {
  const query = document.getElementById('query').value;
  const response = await generateText(query);
  document.getElementById('response').value = response;
});

async function generateText(query) {
  const API_KEY = '<YOUR_API_KEY_HERE>';
  const URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const prompt = query + '\n\nModel Prompt: ';
  const body = {
    prompt: prompt,
    max_tokens: 1024,
    n: 1,
    stop: '\n\n',
  };
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };
  const response = await fetch(URL, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data.choices[0].text.trim();
}
