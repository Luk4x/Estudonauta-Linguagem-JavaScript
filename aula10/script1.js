document.body.style.backgroundColor = 'rgb(40, 40, 40)'
        
const area = document.getElementById('area')
area.innerText = 'Interaja...'
area.style.width = '300px'
area.style.height = '300px'
area.style.backgroundColor = 'green'
area.style.font = 'normal 1.5em Arial'
area.style.color = 'white'
area.style.lineHeight = '300px'
area.style.textAlign = 'center'
area.style.position = 'absolute'
area.style.top = '50%'
area.style.left = '50%'
area.style.transform = 'translate(-50%, -50%)'
area.style.borderRadius = '5px'

area.addEventListener('click', click_k)
area.addEventListener('mouseenter', mouseenter_r)
area.addEventListener('mouseout', mouseout_t)

function click_k(){
    area.innerHTML = '<strong>Clicou</strong>'
    area.style.background = 'red'
}

function mouseenter_r(){
    area.style.cursor = 'pointer'
    area.innerText = 'Entrou'
}

function mouseout_t() {
    area.innerText = 'Saiu'
    area.style.background = 'green'
}