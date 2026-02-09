// ==========================================
// MÓDULO 1: SALIDAS BÁSICAS
// ==========================================
console.log('--- MÓDULO 1: HOLA MUNDO ---')
console.log('Hola Mundo desde la consola')
document.write('<h3>Hola Mundo desde el documento HTML</h3>')

// ==========================================
// MÓDULO 2: TIPOS DE DATOS
// ==========================================
console.log('--- MÓDULO 2: TIPOS DE DATOS ---')
console.log('Texto (String):', 'Soy un texto')
console.log('Número (Number):', 100)
console.log('Booleano:', true)
console.log('Arreglo (Array):', ['HTML', 'CSS', 'JS'])
console.log('Objeto:', { nombre: 'Fazt', lenguaje: 'JavaScript' })

// ==========================================
// MÓDULO 3: VARIABLES Y CONSTANTES
// ==========================================
console.log('--- MÓDULO 3: VARIABLES ---')
let nombreUsuario = 'John'
const PI = 3.1415
nombreUsuario = 'Pepe' // Reasignación
console.log('Usuario:', nombreUsuario)
console.log('Constante PI:', PI)

// ==========================================
// MÓDULO 4: OPERADORES
// ==========================================
console.log('--- MÓDULO 4: OPERADORES ---')
let suma = 50 + 50
let comparacion = 100 > 50
console.log('Resultado suma:', suma)
console.log('¿100 es mayor que 50?:', comparacion)

// ==========================================
// MÓDULO 5: CONDICIONALES
// ==========================================
console.log('--- MÓDULO 5: CONDICIONALES ---')
let score = 70

if (score > 30) {
 console.log('Necesitas practicar más')
} else if (score > 15) {
 console.log('Estás mejorando')
} else {
 console.log('Sigue el tutorial')
}

// ==========================================
// MÓDULO 6: BUCLES (ITERADORES)
// ==========================================
console.log('--- MÓDULO 6: BUCLES ---')
let nombres = ['Ryan', 'Joe', 'John', 'Mario']

console.log('Lista de nombres usando For:')
for (let i = 0; i < nombres.length; i++) {
 console.log('Nombre index ' + i + ': ' + nombres[i])
}

// ==========================================
// MÓDULO 7: FUNCIONES
// ==========================================
console.log('--- MÓDULO 7: FUNCIONES ---')

function saludar(persona) {
 console.log('Hola ' + persona + ', ¡bienvenido al repaso!')
}

// Llamando a la función con diferentes parámetros
saludar('Marcos')
saludar('Kara')
saludar('Connor')
