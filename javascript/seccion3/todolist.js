const input = document.getElementById('texto');
const addbtn = document.getElementById('addbtn');
const ul = document.getElementById('ul');
const msjdefaullt = document.getElementById('msj-default');

//clases para los elementos
const classpan = "text-xl font-bold dark:text-zinc-200 m-2 p-2";
const classcheckbox = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600";
const classlabelcheck = "ms-2 text-sm font-medium text-gray-900 dark:text-gray-300";
const classbtn = "focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm my-0 mx-2.5 p-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";

addbtn.addEventListener('click', (e) => {
  e.preventDefault();

  const text = input.value;
console.log('1');
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const label = document.createElement('label');
  label.textContent= 'Tarea Completada';
  const btn = document.createElement('button');
  btn.textContent = 'Eliminar Tarea';
  li.appendChild(span);

  li.appendChild(label);
  li.appendChild(btn);
  ul.appendChild(li);
})