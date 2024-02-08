// FirmaconrucList.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FirmaconrucList = ({ supabase }) => {
  const [rucRecords, setRucRecords] = useState([]);

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

  async function deleteRucRecord(idruc) {
    try {
      await supabase.from('firmaconruc').delete().eq('idruc', idruc);
      setRucRecords(rucRecords.filter((record) => record.idruc !== idruc));
    } catch (error) {
      console.error('Error deleting ruc record:', error.message);
    }
  }

  return (
    <div>
      <h2>Firmaconruc List</h2>
      <ul>
        {rucRecords.map((record) => (
          <li key={record.idruc}>
            Cédula RUC: {record.cedula_ruc} 
            <br />
            RUC: {record.ruc}
            <br />
            Código Dactilar: {record.codigodactilar_ruc}
            <br />
            Nombres: {record.nombres_ruc} 
            <br />
            Apellido Paterno: {record.apellidopaterno_ruc} 
            <br />
            Apellido Materno: {record.apellidomaterno_ruc} 
            <br />
            Fecha de Nacimiento: {record.fechanacimiento_ruc} 
            <br />
            Género: {record.genero_ruc}
            <br />
            Correo Personal: {record.correopersonal_ruc} 
            <br />
            Celular: {record.celular_ruc} 
            <br />
            Provincia: {record.provincia_ruc}
            <br />
            Ciudad: {record.ciudad_ruc} 
            <br />
            Dirección: {record.direccion_ruc} 
            <br />
            Tiempo Vigencia: {record.tiempovigencia_ruc} 
            <br />
            Foto Cédula Frontal: 
            <br />
            <img 
              src={`../imagenes/${record.fotocedulafrontal_ruc}`} 
              alt="Foto Cédula Frontal" 
              className="img-fluid" 
              style={{ width: '75mm', height: '50mm' }}
            />
            <br />
            Foto Cédula Posterior: 
            <br />
            <img 
              src={`../imagenes/${record.fotocedulaposterior_ruc}`} 
              alt="Foto Cédula Posterior" 
              className="img-fluid" 
              style={{ width: '75mm', height: '50mm' }}
            />
            <br />
            Foto Selfie: 
            <br />
            <img 
              src={`../imagenes/${record.fotoselfie_ruc}`} 
              alt="Foto Selfie" 
              className="img-fluid" 
              style={{ width: '45mm', height: '50mm' }}
            />
            <br />
            Foto Transferencia: 
            <br />
            <img 
              src={`../imagenes/${record.fototransferencia_ruc}`} 
              alt="Foto Transferencia" 
              className="img-fluid" 
              style={{ width: '45mm', height: '50mm' }}
            />
            <br />
            PDF RUC: 
            <a href={`../pdfs/${record.pdf_ruc}`} target="_blank" rel="noreferrer">Ver PDF</a>
            <br /><br />
            <button onClick={() => deleteRucRecord(record.idruc)}>Delete</button>
            <button onClick={() => updateRucRecordl(record.idlegal)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FirmaconrucList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmaconrucList;
