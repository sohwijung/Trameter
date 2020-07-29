const blocks = document.querySelectorAll('.each_question');
const buttons = document.querySelectorAll('.expand');
const listOfArrays = [];

blocks.forEach((block) => {
    listOfArrays.push(Array.from(block.children));
});

buttons.forEach((button, index) => {
    button.addEventListener(('click'), e => {
        const question = listOfArrays[index][1];
        question.classList.toggle('hidden');
    })
})
