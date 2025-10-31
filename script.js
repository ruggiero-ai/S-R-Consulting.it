document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      feedback.textContent = '✅ Messaggio inviato con successo! Ti contatteremo presto.';
      form.reset();
    } else {
      feedback.textContent = '❌ Errore durante l'invio. Riprova più tardi.';
    }
  } catch (error) {
    feedback.textContent = '❌ Impossibile inviare il messaggio. Controlla la connessione.';
  }
});
