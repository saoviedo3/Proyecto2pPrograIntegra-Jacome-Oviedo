// FirmadocumentalList.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FirmadocumentalList = ({ supabase }) => {
  const [documentales, setDocumentales] = useState([]);

  useEffect(() => {
    async function fetchDocumentales() {
      try {
        let { data: documentales, error } = await supabase
          .from('firmadocumental')
          .select('*')
          .order('iddocumental', { ascending: true });

        if (error) {
          throw error;
        }

        setDocumentales(documentales);
      } catch (error) {
        console.error('Error fetching documentales:', error.message);
      }
    }

    fetchDocumentales();
  }, [supabase]);

  async function deleteDocumental(iddocumental) {
    try {
      await supabase.from('firmadocumental').delete().eq('iddocumental', iddocumental);
      setDocumentales(documentales.filter((documental) => documental.iddocumental !== iddocumental));
    } catch (error) {
      console.error('Error deleting documental:', error.message);
    }
  }

  return (
    <div>
      <h2>Firmadocumental List</h2>
      <ul>
        {documentales.map((documental) => (
          <li key={documental.iddocumental}>
            Nombre: {documental.nombres_documental} 
            <br />
            Apelldios: {documental.apellidopaterno_documental} {documental.apellidomaterno_documental} 
            <br />
            Fecha Nacimiento: {documental.fechanacimiento_documental} 
            <br />
            Genero: {documental.genero_documental}
            <br />
            Correo: {documental.correopersonal_documental} 
            <br />
            Celular: {documental.celular_documental} 
            <br />
            Provincia: {documental.provincia_documental}
            <br />
            Ciudad: {documental.ciudad_documental} 
            <br />
            Direccion: {documental.direccion_documental} 
            <br />
            Tiempo Vigencia: {documental.tiempovigencia_documental} 
            <br />
            Foto Cedula Frontal: 
            <br />
            <img 
              src={`../imagenes/${documental.fotocedulafrontal_documental}`} 
              alt="Foto Cedula Frontal" 
              className="img-fluid" 
              style={{ width: '75mm', height: '50mm' }}
            />
            <br />
            Foto Cedula Posterior: 
            <br />
            <img 
              src={`../imagenes/${documental.fotocedulaposterior_documental}`} 
              alt="Foto Cedula Posterior" 
              className="img-fluid" 
              style={{ width: '75mm', height: '50mm' }}
            />
            <br />
            Foto Selfie: 
            <br />
            <img 
              src={`../imagenes/${documental.fotoselfie_documental}`} 
              alt="Foto Selfie" 
              className="img-fluid" 
              style={{ width: '45mm', height: '50mm' }}
            />
            <br />
            Foto Transferencia: 
            <br />
            <img 
              src={`../imagenes/${documental.fototransferencia_documental}`} 
              alt="Foto Transferencia" 
              className="img-fluid" 
              style={{ width: '45mm', height: '50mm' }}
            />

            <br /><br />
            <button onClick={() => deleteDocumental(documental.iddocumental)}>Delete</button>
            <button onClick={() => updateDocumental(record.idlegal)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FirmadocumentalList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmadocumentalList;
