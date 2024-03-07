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
    <form onSubmit={handleSubmit} className="container mt-5">
      <h1>Agregar Firma Documental</h1>
      <h3>Ingrese los datos del cliente</h3>
      <br />
      <div className="form-group">
      <label htmlFor="cedula">Cédula:</label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter Cedula"
        value={cedula_documental}
        onChange={(e) => setCedula_Documental(e.target.value)}
      />

      Codigo Dactilar:

      <input
        type="text"
        className="form-control"
        placeholder="Enter codigo dactilar"
        value={codigodactilar_documental}
        onChange={(e) => setCodigoDactilar_Documental(e.target.value)}
      />
      Nombres:
      <input
        type="text"
        className="form-control"
        placeholder="Enter nombres"
        value={nombres_documental}
        onChange={(e) => setNombres_Documental(e.target.value)}
      />
      Apellido Paterno:
      <input
        type="text"
        className="form-control"
        placeholder="Enter apellido paterno"
        value={apellidopaterno_documental}
        onChange={(e) => setApellidoPaterno_Documental(e.target.value)}
      />
      Apellido Materno:
      <input
        type="text"
        className="form-control"
        placeholder="Enter apellido materno"
        value={apellidomaterno_documental}
        onChange={(e) => setApellidoMaterno_Documental(e.target.value)}
      />
      Fecha de Nacimiento:
      <input
        type="date"
        className="form-control"
        placeholder="Enter fecha nacimiento"
        value={fechanacimiento_documental}
        onChange={(e) => setFechaNacimiento_Documental(e.target.value)}
      />
      Genero:
      <input
        type="text"
        className="form-control"
        placeholder="Enter genero"
        value={genero_documental}
        onChange={(e) => setGenero_Documental(e.target.value)}
      />
      Correo Personal:
      <input
        type="email"
        className="form-control"
        placeholder="Enter correo personal"
        value={correopersonal_documental}
        onChange={(e) => setCorreoPersonal_Documental(e.target.value)}
      />
      Celular:
      <input
        type="number"
        className="form-control"
        placeholder="Enter celular"
        value={celular_documental}
        onChange={(e) => setCelular_Documental(e.target.value)}
      />
      Provincia:
      <input
        type="text"
        className="form-control"
        placeholder="Enter provincia"
        value={provincia_documental}
        onChange={(e) => setProvincia_Documental(e.target.value)}
      />
      Ciudad:
      <input
        type="text"
        className="form-control"
        placeholder="Enter ciudad"
        value={ciudad_documental}
        onChange={(e) => setCiudad_Documental(e.target.value)}
      />
      Direccion:
      <input
        type="text"
        className="form-control"
        placeholder="Enter direccion"
        value={direccion_documental}
        onChange={(e) => setDireccion_Documental(e.target.value)}
      />
      Tiempo Vigencia:
      <input
        type="number"
        className="form-control"
        placeholder="Enter tiempo vigencia"
        value={tiempovigencia_documental}
        onChange={(e) => setTiempoVigencia_Documental(e.target.value)}
      /> 
      Foto Cedula Frontal:
      <input
        type="file"
        className="form-control"
        placeholder="Enter foto cedula frontal"
        onChange={(e) => setFotoCedulaFrontal_Documental(e.target.files[0].name)}
      />
      Foto Cedula Posterior:
      <input
        type="file"
        className="form-control"
        placeholder="Enter foto cedula posterior"
        onChange={(e) => setFotoCedulaPosterior_Documental(e.target.files[0].name)}
      />
      Foto Selfie:
      <input
        type="file"
        className="form-control"
        placeholder="Enter foto selfie"
        onChange={(e) => setFotoSelfie_Documental(e.target.files[0].name)}
      />
      Foto Transferencia:
      <input
        type="file"
        className="form-control"
        placeholder="Enter foto transferencia"
        onChange={(e) => setFotoTransferencia_Documental(e.target.files[0].name)}
      />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Agregar Firma</button>
    </form>
  );
};

FirmadocumentalForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmadocumentalForm;
