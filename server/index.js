const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(cors());
app.use(express.json());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});
const upload = multer({ storage: storage });

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "autobooksv2",
});


app.get("/getBooks", (req, res) => {
    db.query("SELECT * FROM libros", (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});


app.post("/createBook", upload.single('imagen'), (req, res) => {
    const { isbn, titulo, autor, editorial, anioPublicacion, categoria, cantidad, sinopsis } = req.body;
    const imagen = req.file ? req.file.filename : null; // Nombre del archivo de imagen

    db.query(
        'INSERT INTO libros (isbn, titulo, idAutor, editorial, anioPublicacion, idCategoria, cantidad, sinopsis, imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [isbn, titulo, autor, editorial, anioPublicacion, categoria, cantidad, sinopsis, imagen],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.send("Libro registrado con éxito!!");
            }
        }
    );
});

app.post("/updateBook", upload.single('imagen'), (req, res) => {
    const { idLibro, isbn, titulo, autor, editorial, anioPublicacion, categoria, cantidad, sinopsis } = req.body;
    const imagen = req.file ? req.file.filename : null; // Nombre del archivo de imagen

    db.query(
        'UPDATE libros SET isbn = ?, titulo = ?, idAutor = ?, editorial = ?, anioPublicacion = ?, idCategoria = ?, cantidad = ?, sinopsis = ?, imagen = ? WHERE idLibro = ?',
        [isbn, titulo, autor, editorial, anioPublicacion, categoria, cantidad, sinopsis, imagen, idLibro],
        (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.send("Libro actualizado con éxito!!");
            }
        }
    );
});

app.delete("/deleteBook/:id", (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM libros WHERE idLibro = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.send("Libro eliminado con éxito!!");
        }
    });
});

app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
});

