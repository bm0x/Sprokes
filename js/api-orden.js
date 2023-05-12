// Importación de Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ordenes', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost:27017/mercaderias', { useNewUrlParser: true, useUnifiedTopology: true });

// Definición del esquema de la orden de servicio
const ordenServicioSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now
  },
  garantia: {
    type: String,
    enum: ['legal', 'fabricante', 'No Corresponde'],
    required: true
  },
});

// Definición del esquema de la orden de servicio
const ordenMercaderiaSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now
  },
  mercaderia: {
    type: String,
    enum: ['Coorporativa', 'Dañada', 'No Corresponde'],
    required: true
  }
});

// Creación del modelo de la orden de servicio
const OrdenServicio = mongoose.model('OrdenServicio', ordenServicioSchema);

// Ejemplo de creación de una orden de servicio
const orden = new OrdenServicio({
  numero: 25018278,
  garantia: 'legal'
});

// Ejemplo de guardado de la orden de servicio en la base de datos
orden.save()
  .then(() => console.log('Orden de servicio guardada'))
  .catch(error => console.error(error));

  // Creación del modelo de la orden de servicio
const OrdenMercaderia = mongoose.model('OrdenMercaderia', ordenMercaderiaSchema);

// Ejemplo de creación de una orden de servicio
const mercaderia = new OrdenMercaderia({
  numero: 25018278,
  mercaderia: 'Corporativa'
});

// Ejemplo de guardado de la orden de servicio en la base de datos
mercaderia.save()
  .then(() => console.log('Envío de Mercadería guardado'))
  .catch(error => console.error(error));

