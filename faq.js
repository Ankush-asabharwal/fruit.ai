// script.js
const form = document.getElementById('faq-form');
const faqList = document.getElementById('faq-list');

// Initialize FAQ data from local storage
let faqs = JSON.parse(localStorage.getItem('faqs')) || [];

// Function to display FAQ items
function displayFaqs() {
    faqList.innerHTML = '';
    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.innerHTML = `
            <h3>${faq.question}</h3>
            <p>${faq.answer}</p>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        faqList.appendChild(faqItem);
    });
}

// Function to create a new FAQ item
function createFaq(question, answer) {
    const faq = { question, answer };
    faqs.push(faq);
    localStorage.setItem('faqs', JSON.stringify(faqs));
    displayFaqs();
}

// Function to edit an FAQ item
function editFaq(index, question, answer) {
    faqs[index].question = question;
    faqs[index].answer = answer;
    localStorage.setItem('faqs', JSON.stringify(faqs));
    displayFaqs();
}

// Function to delete an FAQ item
function deleteFaq(index) {
    faqs.splice(index, 1);
    localStorage.setItem('faqs', JSON.stringify(faqs));
    displayFaqs();
}

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    createFaq(question, answer);
    form.reset();
});

// Event listener for edit button click
faqList.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const index = e.target.dataset.index;
        const question = prompt('Enter new question:');
        const answer = prompt('Enter new answer:');
        editFaq(index, question, answer);
    } else if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        deleteFaq(index);
    }
});

// Display FAQ items on page load
displayFaqs();