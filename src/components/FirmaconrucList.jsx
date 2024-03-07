// FirmaconrucList.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

import { jsPDF } from "jspdf";

const FirmaconrucList = ({ supabase }) => {
  const [rucRecords, setRucRecords] = useState([]);
  const [selectedLegal, setSelectedLegal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchRucRecords() {
      try {
        let { data: rucRecords, error } = await supabase
          .from('firmaconruc')
          .select('*')
          .order('idruc', { ascending: true });

        if (error) {
          throw error;
        }

        setRucRecords(rucRecords);
      } catch (error) {
        console.error('Error fetching ruc records:', error.message);
      }
    }

    fetchRucRecords();
  }, [supabase]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Nombre: ${selectedLegal.nombres_ruc}`, 10, 10);
    doc.text(`Apellido: ${selectedLegal.apellidopaterno_ruc} ${selectedLegal.apellidomaterno_ruc}`, 10, 20);
    doc.text(`Cédula: ${selectedLegal.cedula_ruc}`, 10, 30);
    doc.text(`Tiempo Vigencia: ${selectedLegal.tiempovigencia_ruc}`, 10, 40);
    doc.text(`Fecha Nacimiento: ${selectedLegal.fechanacimiento_ruc}`, 10, 50);
    doc.text(`Genero: ${selectedLegal.genero_ruc}`, 10, 60);
    doc.text(`Correo: ${selectedLegal.correopersonal_ruc}`, 10, 70);
    doc.text(`Celular: ${selectedLegal.celular_ruc}`, 10, 80);
    doc.text(`Provincia: ${selectedLegal.provincia_ruc}`, 10, 90);
    doc.text(`Ciudad: ${selectedLegal.ciudad_ruc}`, 10, 100);
    doc.text(`Direccion: ${selectedLegal.direccion_ruc}`, 10, 110);
    doc.text(`Codigo Dactilar: ${selectedLegal.codigodactilar_ruc}`, 10, 120);


    // Aquí puedes agregar más campos según sea necesario
    doc.save("documental.pdf");
  };

  async function deleteRucRecord(idruc) {
    try {
      await supabase.from('firmaconruc').delete().eq('idruc', idruc);
      setRucRecords(rucRecords.filter((record) => record.idruc !== idruc));
    } catch (error) {
      console.error('Error deleting ruc record:', error.message);
    }
  }
  const handleDetailsClick = (record) => {
    setSelectedLegal(record);
    setShowModal(true);
  };

  return (
    
    <div class="container mt-5">
      <h2  className="mb-4">Firmaconruc List</h2>
      <table class="table table-striped thead-dark">
      <thead>
        <tr>
          <th>RUC </th>

          <th>Nombres </th>
          <th>Apellido Paterno </th>
          <th>Tiempo de vigencia</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {rucRecords.map((record) => (
          <tr key={record.idruc}>
            <td>{record.ruc}</td>
            <td> {record.nombres_ruc} </td>
            <td>{record.apellidopaterno_ruc} </td>
            <td>{record.tiempovigencia_ruc} </td>
            <td>
            <button className="btn btn-info" onClick={() => handleDetailsClick(record)}>
              Detalles
            </button>
                  </td>
          </tr>
        ))}
      </tbody>
  </table>
  
  <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Detalles Firma electronica Legal</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    
    <p>Cédula: {selectedLegal?.cedula_ruc}</p>
    <p>Nombres: {selectedLegal?.nombres_ruc}</p>
    <p>Apellido Paterno: {selectedLegal?.apellidopaterno_ruc}</p>
    <p>Apellido Materno: {selectedLegal?.apellidomaterno_ruc}</p>
    <p>RUC: {selectedLegal?.ruc}</p>
    <p>Codigo Dactilar: {selectedLegal?.codigodactilar_ruc}</p>
    <p>Fecha de Nacimiento: {selectedLegal?.fechanacimiento_ruc}</p>
    <p>Genero: {selectedLegal?.genero_ruc}</p>
    <p>Correo Personal: {selectedLegal?.correopersonal_ruc}</p>
    <p>Celular: {selectedLegal?.celular_ruc}</p>
    <p>Provincia: {selectedLegal?.provincia_ruc}</p>
    <p>Ciudad: {selectedLegal?.ciudad_ruc}</p>
    <p>Direccion: {selectedLegal?.direccion_ruc}</p>
    <p>Tiempo Vigencia: {selectedLegal?.tiempovigencia_ruc}</p>
    <p>Foto Cédula Frontal: </p>
    <img
      src={`../imagenes/${selectedLegal?.fotocedulafrontal_ruc}`}
      alt="Foto Cédula Frontal"
      className="img-fluid"
      style={{ width: '75mm', height: '50mm' }}
    />
    <p>Foto Cédula Posterior: </p>
    <img
      src={`../imagenes/${selectedLegal?.fotocedulaposterior_ruc}`}
      alt="Foto Cédula Posterior"
      className="img-fluid"
      style={{ width: '75mm', height: '50mm' }}
    />
    <p>Foto Selfie: </p>
    <img
      src={`../imagenes/${selectedLegal?.fotoselfie_ruc}`}
      alt="Foto Selfie"
      className="img-fluid"
      style={{ width: '45mm', height: '50mm' }}
    />
    <p>Foto Transferencia: </p>
    <img
      src={`../imagenes/${selectedLegal?.fototransferencia_ruc}`}
      alt="Foto Transferencia"
      className="img-fluid"
      style={{ width: '75mm', height: '50mm' }}
    />

    
  </Modal.Body>
  <Modal.Footer>
  <button type="button" className="btn btn-primary" onClick={generatePDF}>Generar PDF</button>

    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
  </Modal.Footer>
</Modal>

</div>
  );
};

FirmaconrucList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmaconrucList;
