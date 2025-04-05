/**
 * script.js - Archivo JavaScript principal para UrbanVibe
 * 
 * Este archivo contiene todas las funcionalidades interactivas para la tienda online
 * de ropa urbana UrbanVibe, inspirada en romestore.pe pero con mejoras creativas.
 * 
 * Incluye:
 * - Filtrado de productos por categoría
 * - Visualización modal de productos con galería de imágenes
 * - Sistema de carrito de compras
 * - Selección de tallas y cantidades
 * - Animaciones y efectos visuales
 */

// ==================== VARIABLES GLOBALES ====================
// Datos de productos con sus imágenes
const productData = {
    // Camisetas
    heaven_top_tee: {
        name: "Heaven Top Tee",
        price: 59.00,
        description: "Camiseta de algodón con estampado frontal. Diseño oversize para un estilo urbano y cómodo.",
        category: "camisetas",
        images: [
            "images/camisetas/heaven_top_tee_1.jpg",
            "images/camisetas/heaven_top_tee_2.jpg",
            "images/camisetas/heaven_top_tee_3.jpg",
            "images/camisetas/heaven_top_tee_4.jpg"
        ]
    },
    genesis_top_tee: {
        name: "Genesis Top Tee",
        price: 49.00,
        description: "Camiseta minimalista con diseño exclusivo. Confeccionada en algodón premium para mayor comodidad.",
        category: "camisetas",
        images: [
            "images/camisetas/genesis_top_tee_1.jpg",
            "images/camisetas/genesis_top_tee_2.jpg",
            "images/camisetas/genesis_top_tee_3.jpg",
        ]
    },
    distortion_top_tee: {
        name: "Distortion Top Tee",
        price: 49.00,
        description: "Camiseta con efecto de distorsión en el estampado. Estilo urbano con un toque artístico.",
        category: "camisetas",
        images: [
            "images/camisetas/distortion_top_tee_1.jpg",
            "images/camisetas/distortion_top_tee_2.jpg",
            "images/camisetas/distortion_top_tee_3.jpg",
            "images/camisetas/distortion_top_tee_4.jpg"
        ]
    },
    structure_boxy_tee: {
        name: "Structure Boxy Tee",
        price: 89.00,
        description: "Camiseta con estructura boxy fit. Diseño repujado en delantero y espalda para un estilo único.",
        category: "camisetas",
        images: [
            "images/camisetas/structure_boxy_tee_1.jpeg",
            "images/camisetas/structure_boxy_tee_2.jpeg",
            "images/camisetas/structure_boxy_tee_3.jpeg",
            "images/camisetas/structure_boxy_tee_4.jpeg"
        ]
    },
    tennis_box_tee: {
        name: "Tennis Box Tee",
        price: 89.00,
        description: "Camiseta inspirada en el estilo tenis vintage. Corte box fit con detalles bordados.",
        category: "camisetas",
        images: [
            "images/camisetas/tennis_box_tee_1.jpg",
            "images/camisetas/tennis_box_tee_2.jpg"
        ]
    },
    
    // Camisas
    cozy_knit_shirt: {
        name: "Cozy Knit Shirt",
        price: 119.00,
        description: "Camisa de punto con textura suave. Perfecta para un look casual con estilo.",
        category: "camisas",
        images: [
            "images/camisas/cozy_knit_shirt_1.jpg",
            "images/camisas/cozy_knit_shirt_2.jpg",
            "images/camisas/cozy_knit_shirt_3.jpg",
            "images/camisas/cozy_knit_shirt_4.jpg"
        ]
    },
    rumble_shirt: {
        name: "Rumble Shirt",
        price: 119.00,
        description: "Camisa con diseño urbano y detalles únicos. Confeccionada con materiales de alta calidad.",
        category: "camisas",
        images: [
            "images/camisas/rumble_shirt_1.jpg",
            "images/camisas/rumble_shirt_2.jpg",
            "images/camisas/rumble_shirt_3.jpg",
            "images/camisas/rumble_shirt_4.jpg"
        ]
    },
    resort_zero_sleeve: {
        name: "Resort Zero Sleeve",
        price: 65.00,
        description: "Camisa sin mangas con estampado resort. Ideal para un look veraniego con estilo urbano.",
        category: "camisas",
        images: [
            "images/camisas/resort_zero_sleeve_1.jpg",
            "images/camisas/resort_zero_sleeve_2.jpg",
            "images/camisas/resort_zero_sleeve_3.jpg",
            "images/camisas/resort_zero_sleeve_4.jpg"
        ]
    },
    pin_up_zero_sleeve: {
        name: "Pin Up Zero Sleeve",
        price: 59.00,
        description: "Polo manga cero con cuello redondo oversize. Estampado central con temática pin-up.",
        category: "camisas",
        images: [
            "images/camisas/pin_up_zero_sleeve_1.jpeg",
            "images/camisas/pin_up_zero_sleeve_2.jpeg",
            "images/camisas/pin_up_zero_sleeve_3.jpeg"
        ]
    },
    flamingo_shirt: {
        name: "Flamingo Shirt",
        price: 99.00,
        description: "Camisa con estampado de flamencos. Diseño fresco y llamativo para un estilo diferente.",
        category: "camisas",
        images: [
            "images/camisas/flamingo_shirt_1.jpg",
            "images/camisas/flamingo_shirt_2.jpg",
            "images/camisas/flamingo_shirt_3.jpg",
            "images/camisas/flamingo_shirt_4.jpg"
        ]
    },
    
    // Shorts
    boxer_short: {
        name: "Boxer Short",
        price: 99.00,
        description: "Short de algodón con pretina de boxer. Corte regular para mayor comodidad.",
        category: "shorts",
        images: [
            "images/shorts/boxer_short_1.jpeg",
            "images/shorts/boxer_short_2.jpeg"
        ]
    },
    rush_shorts: {
        name: "Rush Shorts",
        price: 69.00,
        description: "Shorts ligeros y cómodos. Diseñados para un estilo urbano activo.",
        category: "shorts",
        images: [
            "images/shorts/rush_shorts_1.jpg",
            "images/shorts/rush_shorts_2.jpg",
            "images/shorts/rush_shorts_3.jpg"
        ]
    },
    new_fenix_cargo_short: {
        name: "New Fenix Cargo Short",
        price: 119.00,
        description: "Shorts cargo con múltiples bolsillos. Estilo funcional con un toque urbano.",
        category: "shorts",
        images: [
            "images/shorts/new_fenix_cargo_short_1.jpg",
            "images/shorts/new_fenix_cargo_short_2.jpg",
            "images/shorts/new_fenix_cargo_short_3.jpg",
            "images/shorts/new_fenix_cargo_short_4.jpg"
        ]
    },
    textured_short: {
        name: "Textured Short",
        price: 119.00,
        description: "Shorts con textura única. Confeccionados con materiales de alta calidad para mayor durabilidad.",
        category: "shorts",
        images: [
            "images/shorts/textured_short_1.jpg",
            "images/shorts/textured_short_2.jpg",
            "images/shorts/textured_short_3.jpg",
            "images/shorts/textured_short_4.jpg"
        ]
    },
    beach_short: {
        name: "Beach Short",
        price: 89.00,
        description: "Shorts playeros con diseño urbano. Perfectos para un look casual en días cálidos.",
        category: "shorts",
        images: [
            "images/shorts/beach_short_1.jpg",
            "images/shorts/beach_short_2.jpg",
            "images/shorts/beach_short_3.jpg",
            "images/shorts/beach_short_4.jpg"
        ]
    },
    
    // Pantalones
    float_fit_pants: {
        name: "Float Fit Pants",
        price: 119.00,
        description: "Pantalón cargo de drill delgado con bolsillos modulares. Diseño float fit para mayor comodidad.",
        category: "pantalones",
        images: [
            "images/pantalones/float_fit_pants_1.jpeg",
            "images/pantalones/float_fit_pants_2.jpeg",
            "images/pantalones/float_fit_pants_3.jpeg",
        ]
    },
    nobby_pants: {
        name: "Nobby Pants",
        price: 119.00,
        description: "Pantalones con diseño nobby. Estilo urbano con un toque elegante.",
        category: "pantalones",
        images: [
            "images/pantalones/nobby_pants_1.jpg",
            "images/pantalones/nobby_pants_2.jpeg",
            "images/pantalones/nobby_pants_3.jpeg",
            "images/pantalones/nobby_pants_4.jpeg"
        ]
    },
    cargo_pants: {
        name: "Cargo Pants",
        price: 129.00,
        description: "Pantalones cargo con múltiples bolsillos. Funcionales y con estilo urbano.",
        category: "pantalones",
        images: [
            "images/pantalones/cargo_pants_1.jpeg",
            "images/pantalones/cargo_pants_2.jpeg",
            "images/pantalones/cargo_pants_3.jpeg",
            "images/pantalones/cargo_pants_4.jpeg"
        ]
    },
    denim_jeans: {
        name: "Denim Jeans",
        price: 139.00,
        description: "Jeans de denim premium. Corte moderno con detalles urbanos.",
        category: "pantalones",
        images: [
            "images/pantalones/denim_jeans_1.jpg",
            "images/pantalones/denim_jeans_2.jpg",
            "images/pantalones/denim_jeans_3.jpg",
            "images/pantalones/denim_jeans_4.jpg"
        ]
    },
    jogger_pants: {
        name: "Jogger Pants",
        price: 109.00,
        description: "Pantalones jogger con ajuste en tobillos. Cómodos y versátiles para un estilo urbano.",
        category: "pantalones",
        images: [
            "images/pantalones/jogger_pants_1.jpg",
            "images/pantalones/jogger_pants_2.jpg",
            "images/pantalones/jogger_pants_3.jpg",
            "images/pantalones/jogger_pants_4.jpg"
        ]
    },
    
    // Accesorios
    trust_cap: {
        name: "Trust Cap",
        price: 59.00,
        description: "Gorra con diseño trust. Ajustable para mayor comodidad.",
        category: "accesorios",
        images: [
            "images/accesorios/trust_cap_1.jpeg",
            "images/accesorios/trust_cap_2.jpeg"
        ]
    },
    urban_backpack: {
        name: "Urban Backpack",
        price: 129.00,
        description: "Mochila urbana con múltiples compartimentos. Diseño funcional y estilizado.",
        category: "accesorios",
        images: [
            "images/accesorios/urban_backpack_1.jpg",
            "images/accesorios/urban_backpack_2.jpg"
        ]
    },
    streetwear_belt: {
        name: "Streetwear Belt",
        price: 49.00,
        description: "Cinturón con diseño streetwear. Ajustable y resistente.",
        category: "accesorios",
        images: [
            "images/accesorios/streetwear_belt_1.jpg",
            "images/accesorios/streetwear_belt_2.jpg"
        ]
    },
    urban_socks: {
        name: "Urban Socks",
        price: 29.00,
        description: "Calcetines con diseño urbano. Cómodos y con estilo.",
        category: "accesorios",
        images: [
            "images/accesorios/urban_socks_1.jpg",
            "images/accesorios/urban_socks_2.jpg"
        ]
    },
    city_wallet: {
        name: "City Wallet",
        price: 39.00,
        description: "Billetera compacta con diseño city. Funcional y con estilo urbano.",
        category: "accesorios",
        images: [
            "images/accesorios/city_wallet_1.jpg",
            "images/accesorios/city_wallet_2.jpg"
        ]
    }
};

// Carrito de compras
let cart = [];
let selectedSize = '';
let selectedQuantity = 1;

// ==================== SELECTORES DOM ====================
// Elementos generales
const categoryCards = document.querySelectorAll('.category-card');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const sizeButtons = document.querySelectorAll('.size-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const viewProductButtons = document.querySelectorAll('.view-product');

// Elementos del modal
const productModal = document.querySelector('.product-modal');
const closeModalButton = document.querySelector('.close-modal');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDescription = document.getElementById('modal-product-description');
const modalMainImage = document.getElementById('modal-main-image');
const thumbnailImages = document.querySelectorAll('.thumbnail');
const modalSizeButtons = document.querySelectorAll('.modal-size-btn');
const modalQuantityInput = document.querySelector('.quantity-input');
const modalQuantityMinus = document.querySelector('.quantity-btn.minus');
const modalQuantityPlus = document.querySelector('.quantity-btn.plus');
const modalAddToCartButton = document.querySelector('.modal-add-to-cart-btn');

// Elementos del carrito
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCartButton = document.querySelector('.close-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.total-amount');
const checkoutButton = document.querySelector('.checkout-btn');
const overlay = document.querySelector('.overlay');

// ==================== FUNCIONES DE INICIALIZACIÓN ====================
/**
 * Inicializa todas las funcionalidades del sitio
 * Esta función se ejecuta cuando el DOM está completamente cargado
 */
function initApp() {
    // Inicializar filtros de categorías
    initCategoryFilters();
    
    // Inicializar botones de filtro
    initFilterButtons();
    
    // Inicializar botones de talla
    initSizeButtons();
    
    // Inicializar modal de productos
    initProductModal();
    
    // Inicializar carrito de compras
    initCart();
    
    // Cargar carrito desde localStorage si existe
    loadCartFromLocalStorage();
    
    // Actualizar contador del carrito
    updateCartCount();
    
    console.log('UrbanVibe app initialized successfully!');
}

/**
 * Inicializa los filtros de categorías en la sección de categorías
 * Permite filtrar productos al hacer clic en una categoría
 */
function initCategoryFilters() {
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            // Activar el botón de filtro correspondiente
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-filter') === category) {
                    btn.click();
                    
                    // Scroll a la sección de productos
                    document.getElementById('productos').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
}

/**
 * Inicializa los botones de filtro en la sección de productos
 * Permite filtrar productos por categoría
 */
function initFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener categoría a filtrar
            const filterValue = button.getAttribute('data-filter');
            
            // Filtrar productos
            filterProducts(filterValue);
        });
    });
}

/**
 * Inicializa los botones de talla en las tarjetas de productos
 * Permite seleccionar una talla antes de agregar al carrito
 */
function initSizeButtons() {
    // Inicializar botones de talla en tarjetas de productos
    document.querySelectorAll('.product-card .size-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones en este producto
            const sizeButtons = this.parentElement.querySelectorAll('.size-btn');
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Guardar talla seleccionada en el dataset del botón de agregar al carrito
            const addToCartBtn = this.closest('.product-info').querySelector('.add-to-cart-btn');
            addToCartBtn.setAttribute('data-selected-size', this.textContent);
        });
    });
    
    // Inicializar botones de agregar al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            const price = parseFloat(this.getAttribute('data-price'));
            const selectedSize = this.getAttribute('data-selected-size') || 'S'; // Default a S si no se seleccionó
            
            // Agregar producto al carrito
            addToCart(productId, selectedSize, 1, price);
            
            // Animación de agregar al carrito
            this.classList.add('add-to-cart-animation');
            setTimeout(() => {
                this.classList.remove('add-to-cart-animation');
            }, 500);
        });
    });
}

/**
 * Inicializa el modal de productos
 * Configura los eventos para abrir y cerrar el modal, y mostrar detalles del producto
 */
function initProductModal() {
    // Configurar botones para ver detalles del producto
    viewProductButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            openProductModal(productId);
        });
    });
    
    // Cerrar modal al hacer clic en X
    closeModalButton.addEventListener('click', closeProductModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    overlay.addEventListener('click', closeProductModal);
    
    // Inicializar botones de talla en el modal
    modalSizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            modalSizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Guardar talla seleccionada
            selectedSize = this.textContent;
        });
    });
    
    // Inicializar controles de cantidad
    modalQuantityMinus.addEventListener('click', () => {
        if (modalQuantityInput.value > 1) {
            modalQuantityInput.value = parseInt(modalQuantityInput.value) - 1;
            selectedQuantity = parseInt(modalQuantityInput.value);
        }
    });
    
    modalQuantityPlus.addEventListener('click', () => {
        if (modalQuantityInput.value < 10) {
            modalQuantityInput.value = parseInt(modalQuantityInput.value) + 1;
            selectedQuantity = parseInt(modalQuantityInput.value);
        }
    });
    
    modalQuantityInput.addEventListener('change', () => {
        if (modalQuantityInput.value < 1) {
            modalQuantityInput.value = 1;
        } else if (modalQuantityInput.value > 10) {
            modalQuantityInput.value = 10;
        }
        selectedQuantity = parseInt(modalQuantityInput.value);
    });
    
    // Inicializar botón de agregar al carrito en el modal
    modalAddToCartButton.addEventListener('click', () => {
        const productId = modalAddToCartButton.getAttribute('data-product');
        const price = parseFloat(modalAddToCartButton.getAttribute('data-price'));
        
        // Si no hay talla seleccionada, usar la primera
        if (!selectedSize) {
            selectedSize = modalSizeButtons[0].textContent;
        }
        
        // Agregar producto al carrito
        addToCart(productId, selectedSize, selectedQuantity, price);
        
        // Cerrar modal
        closeProductModal();
    });
    
    // Inicializar galería de imágenes
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remover clase active de todos los thumbnails
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            
            // Agregar clase active al thumbnail clickeado
            this.classList.add('active');
            
            // Actualizar imagen principal
            const imageSrc = this.getAttribute('src');
            modalMainImage.setAttribute('src', imageSrc);
        });
    });
}

/**
 * Inicializa el carrito de compras
 * Configura los eventos para abrir y cerrar el carrito, y gestionar productos
 */
function initCart() {
    // Abrir carrito al hacer clic en el ícono
    cartIcon.addEventListener('click', openCart);
    
    // Cerrar carrito al hacer clic en X
    closeCartButton.addEventListener('click', closeCart);
    
    // Cerrar carrito al hacer clic fuera del contenido
    overlay.addEventListener('click', closeCart);
    
    // Inicializar botón de checkout
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('¡Gracias por tu compra!');
            // Vaciar carrito
            cart = [];
            saveCartToLocalStorage();
            updateCartUI();
            closeCart();
        } else {
            alert('Tu carrito está vacío. Agrega productos antes de realizar la compra.');
        }
    });
}

// ==================== FUNCIONES DE FILTRADO DE PRODUCTOS ====================
/**
 * Filtra los productos según la categoría seleccionada
 * @param {string} category - Categoría a filtrar ('todos' para mostrar todos)
 */
function filterProducts(category) {
    productCards.forEach(card => {
        // Remover animación previa
        card.classList.remove('product-filter-animation');
        
        // Aplicar filtro
        if (category === 'todos') {
            card.style.display = 'block';
        } else {
            if (card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
        
        // Agregar animación
        setTimeout(() => {
            if (card.style.display === 'block') {
                card.classList.add('product-filter-animation');
            }
        }, 10);
    });
}

// ==================== FUNCIONES DEL MODAL DE PRODUCTOS ====================
/**
 * Abre el modal de producto y muestra los detalles del producto seleccionado
 * @param {string} productId - ID del producto a mostrar
 */
function openProductModal(productId) {
    // Obtener datos del producto
    const product = productData[productId];
    
    if (!product) {
        console.error(`Producto no encontrado: ${productId}`);
        return;
    }
    
    // Actualizar contenido del modal
    modalProductName.textContent = product.name;
    modalProductPrice.textContent = `S/. ${product.price.toFixed(2)}`;
    modalProductDescription.textContent = product.description;
    
    // Actualizar imágenes
    modalMainImage.setAttribute('src', product.images[0]);
    
    // Actualizar thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        if (index < product.images.length) {
            thumbnail.setAttribute('src', product.images[index]);
            thumbnail.style.display = 'block';
        } else {
            thumbnail.style.display = 'none';
        }
    });
    
    // Activar primer thumbnail
    thumbnails[0].classList.add('active');
    
    // Resetear selección de talla
    modalSizeButtons.forEach(btn => btn.classList.remove('active'));
    modalSizeButtons[0].classList.add('active');
    selectedSize = modalSizeButtons[0].textContent;
    
    // Resetear cantidad
    modalQuantityInput.value = 1;
    selectedQuantity = 1;
    
    // Guardar ID y precio del producto en el botón de agregar al carrito
    modalAddToCartButton.setAttribute('data-product', productId);
    modalAddToCartButton.setAttribute('data-price', product.price);
    
    // Mostrar modal y overlay
    productModal.classList.add('active');
    overlay.classList.add('active');
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal de producto
 */
function closeProductModal() {
    productModal.classList.remove('active');
    overlay.classList.remove('active');
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

// ==================== FUNCIONES DEL CARRITO DE COMPRAS ====================
/**
 * Agrega un producto al carrito
 * @param {string} productId - ID del producto
 * @param {string} size - Talla seleccionada
 * @param {number} quantity - Cantidad
 * @param {number} price - Precio unitario
 */
function addToCart(productId, size, quantity, price) {
    // Verificar si el producto ya está en el carrito con la misma talla
    const existingItemIndex = cart.findIndex(item => 
        item.productId === productId && item.size === size
    );
    
    if (existingItemIndex !== -1) {
        // Actualizar cantidad si ya existe
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Agregar nuevo item si no existe
        cart.push({
            productId,
            size,
            quantity,
            price
        });
    }
    
    // Guardar carrito en localStorage
    saveCartToLocalStorage();
    
    // Actualizar UI del carrito
    updateCartUI();
    
    // Mostrar notificación
    showNotification(`${productData[productId].name} agregado al carrito`);
    
    // Animar contador del carrito
    cartCount.classList.add('cart-count-animation');
    setTimeout(() => {
        cartCount.classList.remove('cart-count-animation');
    }, 500);
}

/**
 * Elimina un producto del carrito
 * @param {number} index - Índice del producto en el array del carrito
 */
function removeFromCart(index) {
    // Eliminar item del carrito
    cart.splice(index, 1);
    
    // Guardar carrito en localStorage
    saveCartToLocalStorage();
    
    // Actualizar UI del carrito
    updateCartUI();
}

/**
 * Actualiza la cantidad de un producto en el carrito
 * @param {number} index - Índice del producto en el array del carrito
 * @param {number} newQuantity - Nueva cantidad
 */
function updateCartItemQuantity(index, newQuantity) {
    // Validar cantidad
    if (newQuantity < 1) {
        newQuantity = 1;
    } else if (newQuantity > 10) {
        newQuantity = 10;
    }
    
    // Actualizar cantidad
    cart[index].quantity = newQuantity;
    
    // Guardar carrito en localStorage
    saveCartToLocalStorage();
    
    // Actualizar UI del carrito
    updateCartUI();
}

/**
 * Actualiza el contador del carrito
 */
function updateCartCount() {
    // Calcular total de items en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    // Actualizar contador
    cartCount.textContent = totalItems;
    
    // Mostrar u ocultar contador según si hay items
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

/**
 * Actualiza la interfaz del carrito
 */
function updateCartUI() {
    // Actualizar contador
    updateCartCount();
    
    // Limpiar contenedor de items
    cartItemsContainer.innerHTML = '';
    
    // Si el carrito está vacío, mostrar mensaje
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotal.textContent = 'S/. 0.00';
        return;
    }
    
    // Calcular total
    let total = 0;
    
    // Agregar items al contenedor
    cart.forEach((item, index) => {
        const product = productData[item.productId];
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        // Crear elemento de item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'cart-item-animation');
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${product.name}</h3>
                <p class="cart-item-price">S/. ${item.price.toFixed(2)}</p>
                <p class="cart-item-size">Talla: ${item.size}</p>
                <div class="cart-item-quantity">
                    <button class="cart-quantity-btn minus" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-quantity-btn plus" data-index="${index}">+</button>
                </div>
            </div>
            <div class="cart-item-remove" data-index="${index}">
                <i class="fas fa-times"></i>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Actualizar total
    cartTotal.textContent = `S/. ${total.toFixed(2)}`;
    
    // Agregar event listeners a botones de cantidad
    document.querySelectorAll('.cart-quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCartItemQuantity(index, cart[index].quantity - 1);
        });
    });
    
    document.querySelectorAll('.cart-quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCartItemQuantity(index, cart[index].quantity + 1);
        });
    });
    
    // Agregar event listeners a botones de eliminar
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
}

/**
 * Abre el carrito
 */
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el carrito
 */
function closeCart() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Guarda el carrito en localStorage
 */
function saveCartToLocalStorage() {
    localStorage.setItem('urbanVibeCart', JSON.stringify(cart));
}

/**
 * Carga el carrito desde localStorage
 */
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('urbanVibeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// ==================== FUNCIONES DE UTILIDAD ====================
/**
 * Muestra una notificación temporal
 * @param {string} message - Mensaje a mostrar
 */
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        
        // Eliminar del DOM después de la animación
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ==================== INICIALIZACIÓN DE LA APP ====================
// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initApp);

// Agregar estilos para la notificación
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(notificationStyle);
