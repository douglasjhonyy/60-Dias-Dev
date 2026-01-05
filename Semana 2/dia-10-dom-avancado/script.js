console.log("🚀 JavaScript Carregado - Dia 10!");

// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

// Galeria
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Drag and Drop
const dragItems = document.querySelectorAll('.drag-item');
const dragZones = document.querySelectorAll('.drag-zone');

let draggedElement = null;
let imagemAtual = 0;

// ========================================
// GALERIA DE IMAGENS
// ========================================

const imagens = [
    {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600',
        titulo: 'Natureza 1',
        descricao: 'Paisagem montanhosa'
    },
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
        titulo: 'Natureza 2',
        descricao: 'Montanhas nevadas'
    },
    {
        url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600',
        titulo: 'Natureza 3',
        descricao: 'Floresta verde'
    },
    {
        url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600',
        titulo: 'Natureza 4',
        descricao: 'Vale com rio'
    },
    {
        url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600',
        titulo: 'Natureza 5',
        descricao: 'Pôr do sol'
    },
    {
        url: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600',
        titulo: 'Natureza 6',
        descricao: 'Céu estrelado'
    }
];

function renderizarGaleria() {
    if (!gallery) {
        console.error('❌ Elemento gallery não encontrado!');
        return;
    }
    
    gallery.innerHTML = '';
    
    imagens.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const imagemElement = document.createElement('img');
        imagemElement.src = img.url;
        imagemElement.alt = img.titulo;
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `<strong>${img.titulo}</strong><br><small>${img.descricao}</small>`;
        
        item.appendChild(imagemElement);
        item.appendChild(overlay);
        item.addEventListener('click', () => abrirModal(index));
        
        gallery.appendChild(item);
    });
    
    console.log('✅ Galeria renderizada');
}

function abrirModal(index) {
    imagemAtual = index;
    const img = imagens[index];
    
    modalImg.src = img.url;
    modalCaption.innerHTML = `<strong>${img.titulo}</strong> - ${img.descricao}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', fecharModal);
if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
});

if (btnPrev) btnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    abrirModal(imagemAtual);
});

if (btnNext) btnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    imagemAtual = (imagemAtual + 1) % imagens.length;
    abrirModal(imagemAtual);
});

document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') fecharModal();
    else if (e.key === 'ArrowLeft') btnPrev.click();
    else if (e.key === 'ArrowRight') btnNext.click();
});

renderizarGaleria();

// ========================================
// DRAG AND DROP
// ========================================

dragItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        draggedElement = item;
        item.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    });
    
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        dragZones.forEach(z => z.classList.remove('drag-over'));
        draggedElement = null;
    });
});

dragZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
    });
    
    zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
    });
    
    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        if (draggedElement) zone.appendChild(draggedElement);
    });
});

console.log('✅ Sistema completo carregado!');