let parentContainer = document.querySelector('.fifth-container')

parentContainer.addEventListener('click', (e)=> {
     let ans =  e.target.nextElementSibling
     ans.classList.toggle('hidden')
 })



// let faqSection = document.querySelector('.faq-list')
// let ansDisplay =document.querySelector('.ans')



//     ansDisplay.addEventListener('click', (e)=>{
//     ans=e.target.className

// if(ansDisplay.className.contains('hidden')){
//     ansDisplay.className.remove('hidden')
// }else{
//     ansDisplay.className.add('hidden')
// }
//     })

// let faq = document.querySelector('.faq')

// faq.addEventListener('click', (e)=> {
//     let inner =  e.target.nextElementSibling
//     inner.classList.toggle('hidden')
// })
