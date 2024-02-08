// FirmadocumentalForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const FirmadocumentalForm = ({ supabase }) => {
  const [cedula_documental, setCedula_Documental] = useState('');
  const [codigodactilar_documental, setCodigoDactilar_Documental] = useState('');
  const [nombres_documental, setNombres_Documental] = useState('');
  const [apellidopaterno_documental, setApellidoPaterno_Documental] = useState('');
  const [apellidomaterno_documental, setApellidoMaterno_Documental] = useState('');
  const [fechanacimiento_documental, setFechaNacimiento_Documental] = useState('');
  const [genero_documental, setGenero_Documental] = useState('');
  const [correopersonal_documental, setCorreoPersonal_Documental] = useState('');
  const [celular_documental, setCelular_Documental] = useState('');
  const [provincia_documental, setProvincia_Documental] = useState('');
  const [ciudad_documental, setCiudad_Documental] = useState('');
  const [direccion_documental, setDireccion_Documental] = useState('');
  const [tiempovigencia_documental, setTiempoVigencia_Documental] = useState('');
  const [fotocedulafrontal_documental, setFotoCedulaFrontal_Documental] = useState('');
  const [fotocedulaposterior_documental, setFotoCedulaPosterior_Documental] = useState('');
  const [fotoselfie_documental, setFotoSelfie_Documental] = useState('');
  const [fototransferencia_documental, setFotoTransferencia_Documental] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombres_documental.trim()) return;
    try {
      const { error } = await supabase.from('firmadocumental').insert([{
        cedula_documental,
        codigodactilar_documental,
        nombres_documental,
        apellidopaterno_documental,
        apellidomaterno_documental,
        fechanacimiento_documental,
        genero_documental,
        correopersonal_documental,
        celular_documental,
        provincia_documental,
        ciudad_documental,
        direccion_documental,
        tiempovigencia_documental,
        fotocedulafrontal_documental,
        fotocedulaposterior_documental,
        fotoselfie_documental,
        fototransferencia_documental
      }]);
      if (error) {
        throw error;
      }
      setCedula_Documental('');
      setCodigoDactilar_Documental('');
      setNombres_Documental('');
      setApellidoPaterno_Documental('');
      setApellidoMaterno_Documental('');
      setFechaNacimiento_Documental('');
      setGenero_Documental('');
      setCorreoPersonal_Documental('');
      setCelular_Documental('');
      setProvincia_Documental('');
      setCiudad_Documental('');
      setDireccion_Documental('');
      setTiempoVigencia_Documental('');
      setFotoCedulaFrontal_Documental('');
      setFotoCedulaPosterior_Documental('');
      setFotoSelfie_Documental('');
      setFotoTransferencia_Documental('');
      alert('Agregado correctamente');
    } catch (error) {
      console.error('Error adding firma:', error.message);
      alert('No se agregó correctamente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Firma Documental</h2>
      <h3>Ingrese los datos del cliente</h3>
      Cedula:
      <br />
      <input
        type="number"
        placeholder="Enter Cedula"
        value={cedula_documental}
        onChange={(e) => setCedula_Documental(e.target.value)}
      />
      <br />
      Codigo Dactilar:
      <br />
      <input
        type="text"
        placeholder="Enter codigodactilar_documental"
        value={codigodactilar_documental}
        onChange={(e) => setCodigoDactilar_Documental(e.target.value)}
      />
      <br />
      Nombres:
      <br />
      <input
        type="text"
        placeholder="Enter nombres_documental"
        value={nombres_documental}
        onChange={(e) => setNombres_Documental(e.target.value)}
      />
      <br />
      Apellido Paterno:
      <br />
      <input
        type="text"
        placeholder="Enter apellidopaterno_documental"
        value={apellidopaterno_documental}
        onChange={(e) => setApellidoPaterno_Documental(e.target.value)}
      />
      <br />
      Apellido Materno:
      <br />
      <input
        type="text"
        placeholder="Enter apellidomaterno_documental"
        value={apellidomaterno_documental}
        onChange={(e) => setApellidoMaterno_Documental(e.target.value)}
      />
      <br />
      Fecha de Nacimiento:
      <br />
      <input
        type="date"
        placeholder="Enter fechanacimiento_documental"
        value={fechanacimiento_documental}
        onChange={(e) => setFechaNacimiento_Documental(e.target.value)}
      />
      <br />
      Genero:
      <br />
      <input
        type="text"
        placeholder="Enter genero_documental"
        value={genero_documental}
        onChange={(e) => setGenero_Documental(e.target.value)}
      />
      <br />
      Correo Personal:
      <br />
      <input
        type="email"
        placeholder="Enter correopersonal_documental"
        value={correopersonal_documental}
        onChange={(e) => setCorreoPersonal_Documental(e.target.value)}
      />
      <br />
      Celular:
      <br />
      <input
        type="number"
        placeholder="Enter celular_documental"
        value={celular_documental}
        onChange={(e) => setCelular_Documental(e.target.value)}
      />
      <br />
      Provincia:
      <br />
      <input
        type="text"
        placeholder="Enter provincia_documental"
        value={provincia_documental}
        onChange={(e) => setProvincia_Documental(e.target.value)}
      />
      <br />
      Ciudad:
      <br />
      <input
        type="text"
        placeholder="Enter ciudad_documental"
        value={ciudad_documental}
        onChange={(e) => setCiudad_Documental(e.target.value)}
      />
      <br />
      Direccion:
      <br />
      <input
        type="text"
        placeholder="Enter direccion_documental"
        value={direccion_documental}
        onChange={(e) => setDireccion_Documental(e.target.value)}
      />
      <br />
      Tiempo Vigencia:
      <br />
      <input
        type="number"
        placeholder="Enter tiempovigencia_documental"
        value={tiempovigencia_documental}
        onChange={(e) => setTiempoVigencia_Documental(e.target.value)}
      /> 
      <br />
      Foto Cedula Frontal:
      <br />
      <input
        type="file"
        placeholder="Enter fotocedulafrontal_documental"
        onChange={(e) => setFotoCedulaFrontal_Documental(e.target.files[0].name)}
      />
      <br />
      Foto Cedula Posterior:
      <br />
      <input
        type="file"
        placeholder="Enter fotocedulaposterior_documental"
        onChange={(e) => setFotoCedulaPosterior_Documental(e.target.files[0].name)}
      />
      <br />
      Foto Selfie:
      <br />
      <input
        type="file"
        placeholder="Enter fotoselfie_documental"
        onChange={(e) => setFotoSelfie_Documental(e.target.files[0].name)}
      />
      <br />
      Foto Transferencia:
      <br />
      <input
        type="file"
        placeholder="Enter fototransferencia_documental"
        onChange={(e) => setFotoTransferencia_Documental(e.target.files[0].name)}
      />
      <br />
      <button type="submit">Agregar Firma</button>
    </form>
  );
};

FirmadocumentalForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmadocumentalForm;
