// FirmaLegalForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const FirmaLegalForm = ({ supabase }) => {
  const [cedula_legal, setCedula_Legal] = useState('');
  const [ruc_legal, setRuc_Legal] = useState('');
  const [codigodactilar_legal, setCodigoDactilar_Legal] = useState('');
  const [nombres_legal, setNombres_Legal] = useState('');
  const [apellidopaterno_legal, setApellidoPaterno_Legal] = useState('');
  const [apellidomaterno_legal, setApellidoMaterno_Legal] = useState('');
  const [fechanacimiento_legal, setFechaNacimiento_Legal] = useState('');
  const [genero_legal, setGenero_Legal] = useState('');
  const [correopersonal_legal, setCorreoPersonal_Legal] = useState('');
  const [celular_legal, setCelular_Legal] = useState('');
  const [rucempresa_legal, setRucEmpresa_Legal] = useState('');
  const [razonsocial_legal, setRazonSocial_Legal] = useState('');
  const [cargorepresentante_legal, setCargoRepresentante_Legal] = useState('');
  const [provincia_legal, setProvincia_Legal] = useState('');
  const [ciudad_legal, setCiudad_Legal] = useState('');
  const [direccion_legal, setDireccion_Legal] = useState('');
  const [tiempovigencia_legal, setTiempoVigencia_Legal] = useState('');
  const [fotocedulafrontal_legal, setFotoCedulaFrontal_Legal] = useState('');
  const [fotocedulaposterior_legal, setFotoCedulaPosterior_Legal] = useState('');
  const [fotoselfie_legal, setFotoSelfie_Legal] = useState('');
  const [pdf_legal, setPdf_Legal] = useState('');
  const [pdfconstitucioncompania_legal, setPdfConstitucionCompania_Legal] = useState('');
  const [pdfnombramientorepresentante_legal, setPdfNombramientoRepresentante_Legal] = useState('');
  const [pdfaceptamientonombramiento_legal, setPdfAceptamientoNombramiento_Legal] = useState('');
  const [fototransferencia_legal, setFotoTransferencia_Legal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombres_legal.trim()) return;
    try {
      const { error } = await supabase.from('firmalegal').insert([{
        cedula_legal,
        ruc_legal,
        codigodactilar_legal,
        nombres_legal,
        apellidopaterno_legal,
        apellidomaterno_legal,
        fechanacimiento_legal,
        genero_legal,
        correopersonal_legal,
        celular_legal,
        rucempresa_legal,
        razonsocial_legal,
        cargorepresentante_legal,
        provincia_legal,
        ciudad_legal,
        direccion_legal,
        tiempovigencia_legal,
        fotocedulafrontal_legal,
        fotocedulaposterior_legal,
        fotoselfie_legal,
        pdf_legal,
        pdfconstitucioncompania_legal,
        pdfnombramientorepresentante_legal,
        pdfaceptamientonombramiento_legal,
        fototransferencia_legal
      }]);
      if (error) {
        throw error;
      }
      setCedula_Legal('');
      setRuc_Legal('');
      setCodigoDactilar_Legal('');
      setNombres_Legal('');
      setApellidoPaterno_Legal('');
      setApellidoMaterno_Legal('');
      setFechaNacimiento_Legal('');
      setGenero_Legal('');
      setCorreoPersonal_Legal('');
      setCelular_Legal('');
      setRucEmpresa_Legal('');
      setRazonSocial_Legal('');
      setCargoRepresentante_Legal('');
      setProvincia_Legal('');
      setCiudad_Legal('');
      setDireccion_Legal('');
      setTiempoVigencia_Legal('');
      setFotoCedulaFrontal_Legal('');
      setFotoCedulaPosterior_Legal('');
      setFotoSelfie_Legal('');
      setPdf_Legal('');
      setPdfConstitucionCompania_Legal('');
      setPdfNombramientoRepresentante_Legal('');
      setPdfAceptamientoNombramiento_Legal('');
      setFotoTransferencia_Legal('');
      alert('Agregado correctamente');
    } catch (error) {
      console.error('Error adding firma:', error.message);
      alert('No se agregó correctamente');
    }
  };

  return (
    <div class="card" >
  <div class="card-body">
    <form onSubmit={handleSubmit} class="form-group">
      <h2 class="card-title">Firma Legal</h2>
      <h3 class="card-subtitle mb-2 text-muted">Ingrese los datos del cliente</h3>        
      <input
        type="number"
        class="form-control"
        placeholder="Enter Cedula"
        value={cedula_legal}
        onChange={(e) => setCedula_Legal(e.target.value)}
      />
      <input
        type="number"
        class="form-control"
        placeholder="Enter RUC"
        value={ruc_legal}
        onChange={(e) => setRuc_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Codigo Dactilar"
        value={codigodactilar_legal}
        onChange={(e) => setCodigoDactilar_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Nombres"
        value={nombres_legal}
        onChange={(e) => setNombres_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Apellido Paterno"
        value={apellidopaterno_legal}
        onChange={(e) => setApellidoPaterno_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Apellido Materno"
        value={apellidomaterno_legal}
        onChange={(e) => setApellidoMaterno_Legal(e.target.value)}
      />
      <input
        type="date"
        class="form-control"
        placeholder="Enter Fecha Nacimiento"
        value={fechanacimiento_legal}
        onChange={(e) => setFechaNacimiento_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Genero"
        value={genero_legal}
        onChange={(e) => setGenero_Legal(e.target.value)}
      />
      <input
        type="email"
        class="form-control"
        placeholder="Enter Correo"
        value={correopersonal_legal}
        onChange={(e) => setCorreoPersonal_Legal(e.target.value)}
      />
      <input
        type="number"
        class="form-control"
        placeholder="Enter Celular"
        value={celular_legal}
        onChange={(e) => setCelular_Legal(e.target.value)}
      />
      <input
        type="number"
        class="form-control"
        placeholder="Enter RUC Empresa"
        value={rucempresa_legal}
        onChange={(e) => setRucEmpresa_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Razon Social"
        value={razonsocial_legal}
        onChange={(e) => setRazonSocial_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Cargo Representante Legal"
        value={cargorepresentante_legal}
        onChange={(e) => setCargoRepresentante_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Provincia"
        value={provincia_legal}
        onChange={(e) => setProvincia_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Ciudad"
        value={ciudad_legal}
        onChange={(e) => setCiudad_Legal(e.target.value)}
      />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Direccion"
        value={direccion_legal}
        onChange={(e) => setDireccion_Legal(e.target.value)}
      />
      <input
        type="number"
        class="form-control"
        placeholder="Enter Timepo Vigencia"
        value={tiempovigencia_legal}
        onChange={(e) => setTiempoVigencia_Legal(e.target.value)}
      /> 
      Foto cedula frontal:
      <input
        type="file"
        class="form-control"
        placeholder="Enter foto cedula frontal"
        onChange={(e) => setFotoCedulaFrontal_Legal(e.target.files[0].name)}
      />
      Foto cedula posterior:
      <input
        type="file"
        class="form-control"
        placeholder="Enter foto cedula posterior"
        onChange={(e) => setFotoCedulaPosterior_Legal(e.target.files[0].name)}
      />
      Foto selfie:
      <input
        type="file"
        class="form-control"
        placeholder="Enter foto selfie"
        onChange={(e) => setFotoSelfie_Legal(e.target.files[0].name)}
      />
      Foto transferencia:
      <input
        type="file"
        class="form-control"
        placeholder="Enter foto transferencia"
        onChange={(e) => setFotoTransferencia_Legal(e.target.files[0].name)}
      />
      Pdf RUC:
      <input
        type="file"
        class="form-control"
        placeholder="Enter pdf_ruc"
        onChange={(e) => setPdf_Legal(e.target.files[0].name)}
      />
      Pdf constitucion compania:
      <input
        type="file"
        class="form-control"
        placeholder="Enter pdf constitucion compania"
        onChange={(e) => setPdfConstitucionCompania_Legal(e.target.files[0].name)}
      />
      Pdf nombramiento representante legal:
      <input
        type="file"
        class="form-control"
        placeholder="Enter pdf nombramiento representante legal"
        onChange={(e) => setPdfNombramientoRepresentante_Legal(e.target.files[0].name)}
      />
      Pdf aceptamiento nombramiento:
      <input
        type="file"
        class="form-control"
        placeholder="Enter pdf aceptamiento nombramiento"
        onChange={(e) => setPdfAceptamientoNombramiento_Legal(e.target.files[0].name)}
      />
      <br />
      
      <button type="submit" class="btn btn-primary">Agregar Firma Legal</button>
    </form>
  </div>
</div>
  );
};

FirmaLegalForm.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmaLegalForm;