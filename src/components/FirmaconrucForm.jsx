// FirmaconrucForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const FirmaconrucForm = ({ supabase }) => {
  const [cedula_ruc, setCedula_Ruc] = useState('');
  const [ruc, setRuc] = useState('');
  const [codigodactilar_ruc, setCodigoDactilar_Ruc] = useState('');
  const [nombres_ruc, setNombres_Ruc] = useState('');
  const [apellidopaterno_ruc, setApellidoPaterno_Ruc] = useState('');
  const [apellidomaterno_ruc, setApellidoMaterno_Ruc] = useState('');
  const [fechanacimiento_ruc, setFechaNacimiento_Ruc] = useState('');
  const [genero_ruc, setGenero_Ruc] = useState('');
  const [correopersonal_ruc, setCorreoPersonal_Ruc] = useState('');
  const [celular_ruc, setCelular_Ruc] = useState('');
  const [provincia_ruc, setProvincia_Ruc] = useState('');
  const [ciudad_ruc, setCiudad_Ruc] = useState('');
  const [direccion_ruc, setDireccion_Ruc] = useState('');
  const [tiempovigencia_ruc, setTiempoVigencia_Ruc] = useState('');
  const [fotocedulafrontal_ruc, setFotoCedulaFrontal_Ruc] = useState('');
  const [fotocedulaposterior_ruc, setFotoCedulaPosterior_Ruc] = useState('');
  const [fotoselfie_ruc, setFotoSelfie_Ruc] = useState('');
  const [pdf_ruc, setPdf_Ruc] = useState('');
  const [fototransferencia_ruc, setFotoTransferencia_Ruc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombres_ruc.trim()) return;
    try {
      const { error } = await supabase.from('firmaconruc').insert([{
        cedula_ruc,
        ruc,
        codigodactilar_ruc,
        nombres_ruc,
        apellidopaterno_ruc,
        apellidomaterno_ruc,
        fechanacimiento_ruc,
        genero_ruc,
        correopersonal_ruc,
        celular_ruc,
        provincia_ruc,
        ciudad_ruc,
        direccion_ruc,
        tiempovigencia_ruc,
        fotocedulafrontal_ruc,
        fotocedulaposterior_ruc,
        fotoselfie_ruc,
        pdf_ruc,
        fototransferencia_ruc
      }]);
      if (error) {
        throw error;
      }
      setCedula_Ruc('');
      setRuc('');
      setCodigoDactilar_Ruc('');
      setNombres_Ruc('');
      setApellidoPaterno_Ruc('');
      setApellidoMaterno_Ruc('');
      setFechaNacimiento_Ruc('');
      setGenero_Ruc('');
      setCorreoPersonal_Ruc('');
      setCelular_Ruc('');
      setProvincia_Ruc('');
      setCiudad_Ruc('');
      setDireccion_Ruc('');
      setTiempoVigencia_Ruc('');
      setFotoCedulaFrontal_Ruc('');
      setFotoCedulaPosterior_Ruc('');
      setFotoSelfie_Ruc('');
      setPdf_Ruc('');
      setFotoTransferencia_Ruc('');
      alert('Agregado correctamente');
    } catch (error) {
      console.error('Error adding firma:', error.message);
      alert('No se agregó correctamente');
    }
  };

  return (

    <div class="card" >
  <div class="card-body"></div>
    <form onSubmit={handleSubmit} className="container mt-5">
      <h2>Firma con RUC</h2>
      <h3>Ingrese los datos del cliente</h3>
      Cedula:
      <br />
      <input
        type="number"
        class="form-control"
        placeholder=" Cedula"
        value={cedula_ruc}
        onChange={(e) => setCedula_Ruc(e.target.value)}
      />
      <br />
      RUC:
      <br />
      <input
        type="number"
        class="form-control"
        placeholder=" RUC"
        value={ruc}
        onChange={(e) => setRuc(e.target.value)}
      />
      <br />
      Codigo Dactilar:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Codigo Dactilar"
        value={codigodactilar_ruc}
        onChange={(e) => setCodigoDactilar_Ruc(e.target.value)}
      />
      <br />
      Nombres:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Nombres"
        value={nombres_ruc}
        onChange={(e) => setNombres_Ruc(e.target.value)}
      />
      <br />
      Apellido Paterno:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Apellido Paterno"
        value={apellidopaterno_ruc}
        onChange={(e) => setApellidoPaterno_Ruc(e.target.value)}
      />
      <br />
      Apellido Materno:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Apellido Materno"
        value={apellidomaterno_ruc}
        onChange={(e) => setApellidoMaterno_Ruc(e.target.value)}
      />
      <br />
      Fecha Nacimiento:
      <br />
      <input
        type="date"
        class="form-control"
        placeholder=" Fecha Nacimiento"
        value={fechanacimiento_ruc}
        onChange={(e) => setFechaNacimiento_Ruc(e.target.value)}
      />
      <br />
      Genero:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Genero"
        value={genero_ruc}
        onChange={(e) => setGenero_Ruc(e.target.value)}
      />
      <br />
      Correo:
      <br />
      <input
        type="email"
        class="form-control"
        placeholder=" Correo"
        value={correopersonal_ruc}
        onChange={(e) => setCorreoPersonal_Ruc(e.target.value)}
      />
      <br />
      Celular:
      <br />
      <input
        type="number"
        class="form-control"
        placeholder=" Celular"
        value={celular_ruc}
        onChange={(e) => setCelular_Ruc(e.target.value)}
      />
      <br />
      Provincia:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Provincia"
        value={provincia_ruc}
        onChange={(e) => setProvincia_Ruc(e.target.value)}
      />
      <br />
      Ciudad:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Ciudad"
        value={ciudad_ruc}
        onChange={(e) => setCiudad_Ruc(e.target.value)}
      />
      <br />
      Direccion:
      <br />
      <input
        type="text"
        class="form-control"
        placeholder=" Direccion"
        value={direccion_ruc}
        onChange={(e) => setDireccion_Ruc(e.target.value)}
      />
      <br />
      Tiempo Vigencia:
      <br />
      <input
        type="number"
        class="form-control"
        placeholder=" Tiempo Vigencia"
        value={tiempovigencia_ruc}
        onChange={(e) => setTiempoVigencia_Ruc(e.target.value)}
      /> 
      <br />
      Foto Cedula Frontal:
      <br />
      <input
        type="file" 
        class="form-control"
        onChange={(e) => setFotoCedulaFrontal_Ruc(e.target.files[0].name)}
      />
      <br />
      Foto Cedula Posterior: 
      <br />
      <input
        type="file"
        class="form-control"
        onChange={(e) => setFotoCedulaPosterior_Ruc(e.target.files[0].name)}
      />
      <br />
      Foto Selfie: 
      <br />
      <input
        type="file"
        class="form-control"
        onChange={(e) => setFotoSelfie_Ruc(e.target.files[0].name)}
      />
      <br />
      Foto Transferencia:
      <br />
      <input
        type="file"
        class="form-control"
        onChange={(e) => setFotoTransferencia_Ruc(e.target.files[0].name)}
      />
      <br />
      Pdf RUC:
      <br />
      <input
        type="file"
        class="form-control"
        onChange={(e) => setPdf_Ruc(e.target.files[0].name)}
      />
      <br />
      <button type="submit" class="btn btn-primary">Agregar Firma con RUC</button>
    </form>
    </div>
  );
};

FirmaconrucForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmaconrucForm;