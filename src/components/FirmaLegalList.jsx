// FirmaLegalList.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FirmaLegalList = ({ supabase }) => {
  const [legalRecords, setLegalRecords] = useState([]);

  useEffect(() => {
    async function fetchLegalRecords() {
      try {
        let { data: legalRecords, error } = await supabase
          .from('firmalegal')
          .select('*')
          .order('idlegal', { ascending: true });

        if (error) {
          throw error;
        }

        setLegalRecords(legalRecords);
      } catch (error) {
        console.error('Error fetching legal records:', error.message);
      }
    }

    fetchLegalRecords();
  }, [supabase]);

  // Asegúrate de actualizar la función de eliminación para que funcione con la tabla firmalegal
  async function deleteLegalRecord(idlegal) {
    try {
      await supabase.from('firmalegal').delete().eq('idlegal', idlegal);
      setLegalRecords(legalRecords.filter((record) => record.idlegal !== idlegal));
    } catch (error) {
      console.error('Error deleting legal record:', error.message);
    }
  }

  return (
    <div class="container">
    <h2>Firma Legal List</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Cédula </th>
          <th>RUC </th>
          <th>Código Dactilar </th>
          <th>Nombres </th>
          <th>Apellido Paterno </th>
          <th>Apellido Materno </th>
          <th>Fecha de Nacimiento </th>
          <th>Género</th>
          <th>Correo Personal </th>
          <th>Celular </th>
          <th>RUC Empresa </th>
          <th>Razon Social </th>
          <th>Cargo Representante </th>
          <th>Provincia </th>
          <th>Ciudad </th>
          <th>Dirección </th>
          <th>Tiempo Vigencia </th>
          <th>Foto Cédula Frontal </th>
          <th>Foto Cédula Posterior </th>
          <th>Foto Selfie </th>
          <th>Foto Transferencia </th>
          <th>PDF RUC</th>
          <th>PDF Constitucion Compañia </th>
          <th>PDF Nombramiento Representante </th>
          <th>PDF Poder Acpetamiento Nombramiento </th>


          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {legalRecords.map((record) => (
        <tr key={record.idlegal}>
          <td>{record.cedula_legal}</td>
          <td>{record.ruc_legal}</td>
          <td>{record.codigodactilar_legal}</td>
          <td>{record.nombres_legal}</td>
          <td>{record.apellidopaterno_legal}</td>
          <td>{record.apellidomaterno_legal}</td>
          <td>{record.fechanacimiento_legal}</td>
          <td>{record.genero_legal}</td>
          <td>{record.correopersonal_legal}</td>
          <td>{record.celular_legal}</td>
          <td>{record.rucempresa_legal}</td>
          <td>{record.razonsocial_legal}</td>
          <td>{record.cargorepresentante_legal}</td>
          <td>{record.provincia_legal}</td>
          <td>{record.ciudad_legal}</td>
          <td>{record.direccion_legal}</td>
          <td>{record.tiempovigencia_legal}</td>
          <td><img 
                src={`../imagenes/${record.fotocedulafrontal_legal}`} 
                alt="Foto Cédula Frontal Legal" 
                className="img-fluid" 
                style={{ width: '75mm', height: '50mm' }}
              /></td>
          <td><img 
                src={`../imagenes/${record.fotocedulaposterior_legal}`} 
                alt="Foto Cédula Posterior Legal" 
                className="img-fluid" 
                style={{ width: '75mm', height: '50mm' }}
              /></td>
              <td><img 
                src={`../imagenes/${record.fotoselfie_legal}`} 
                alt="Foto Selfie Legal" 
                className="img-fluid" 
                style={{ width: '45mm', height: '50mm' }}
              />  </td>
              <td><img 
                src={`../imagenes/${record.fototransferencia_legal}`} 
                alt="Foto Transferencia Legal" 
                className="img-fluid" 
                style={{ width: '45mm', height: '50mm' }}
              /></td>
              <td><a href={`../pdfs/${record.pdf_legal}`} target="_blank" rel="noreferrer">Ver PDF</a></td>
              <td><a href={`../pdfs/${record.pdfconstitucioncompania_legal}`} target="_blank" rel="noreferrer">Ver PDF</a></td>
              <td><a href={`../pdfs/${record.pdfnombramientorepresentante_legal}`} target="_blank" rel="noreferrer">Ver PDF</a></td>
              <td><a href={`../pdfs/${record.pdfaceptamientonombramiento_legal}`} target="_blank" rel="noreferrer">Ver PDF</a></td>

              <br />
              Código Dactilar Legal: {record.codigodactilar_legal}
              <br />
              Nombres Legal: {record.nombres_legal} 
              <br />
              Apellido Paterno Legal: {record.apellidopaterno_legal} 
              <br />
              Apellido Materno Legal: {record.apellidomaterno_legal} 
              <br />
              Fecha de Nacimiento Legal: {record.fechanacimiento_legal} 
              <br />
              Género Legal: {record.genero_legal}
              <br />
              Correo Personal Legal: {record.correopersonal_legal} 
              <br />
              Celular Legal: {record.celular_legal} 
              <br />
              Ruc Empresa: {record.rucempresa_legal}
              <br />
              Razon Social: {record.razonsocial_legal}
              <br />
              Cargo Legal: {record.cargorepresentante_legal}
              <br />
              Provincia Legal: {record.provincia_legal}
              <br />
              Ciudad Legal: {record.ciudad_legal} 
              <br />
              Dirección Legal: {record.direccion_legal} 
              <br />
              Tiempo Vigencia Legal: {record.tiempovigencia_legal} 
              <br />
              Foto Cédula Frontal Legal: 
              <br />
              <img 
                src={`../imagenes/${record.fotocedulafrontal_legal}`} 
                alt="Foto Cédula Frontal Legal" 
                className="img-fluid" 
                style={{ width: '75mm', height: '50mm' }}
              />
              <br />
              Foto Cédula Posterior Legal: 
              <br />
              <img 
                src={`../imagenes/${record.fotocedulaposterior_legal}`} 
                alt="Foto Cédula Posterior Legal" 
                className="img-fluid" 
                style={{ width: '75mm', height: '50mm' }}
              />
              <br />
              Foto Selfie Legal: 
              <br />
              <img 
                src={`../imagenes/${record.fotoselfie_legal}`} 
                alt="Foto Selfie Legal" 
                className="img-fluid" 
                style={{ width: '45mm', height: '50mm' }}
              />
              <br />
              Foto Transferencia Legal: 
              <br />
              <img 
                src={`../imagenes/${record.fototransferencia_legal}`} 
                alt="Foto Transferencia Legal" 
                className="img-fluid" 
                style={{ width: '45mm', height: '50mm' }}
              />
              <br />
              PDF Legal: 
              <a href={`../pdfs/${record.pdf_legal}`} target="_blank" rel="noreferrer">Ver PDF</a>
              <br />
              Pdf Constitucion Compañia:
              <a href={`../pdfs/${record.pdfconstitucioncompania_legal}`} target="_blank" rel="noreferrer">Ver PDF</a>
              <br />  
              Pdf Nombramiento Representante Legal:
              <a href={`../pdfs/${record.pdfnombramientorepresentante_legal}`} target="_blank" rel="noreferrer">Ver PDF</a>
              <br />
              Pdf Poder Acpetamiento Nombramiento:
              <a href={`../pdfs/${record.pdfaceptamientonombramiento_legal}`} target="_blank" rel="noreferrer">Ver PDF</a>
              <br /><br />
              <td>
            <button onClick={() => deleteLegalRecord(record.idlegal)} class="btn btn-danger">Delete</button>
            <button onClick={() => updateLegalRecord(record.idlegal)} class="btn btn-primary">Update</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

FirmaLegalList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmaLegalList;
