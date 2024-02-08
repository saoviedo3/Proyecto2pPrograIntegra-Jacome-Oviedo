# JOVSA Firmas

Este proyecto es una aplicación de gestión prara la venta de firmas

## Tecnologías utilizadas

- React.js
- Supabase

## Configuración de Supabase

1. Crea una cuenta en Supabase.
2. Crea un nuevo proyecto.
3. En la Configuracion del proyecto seccion "tus apps" obtener las variables `URL` y `KEY` con los valores proporcionados por Supabase.
5. Implementar las siguientes tablas

```
      create table
  public.firmaconruc (
    idruc serial,
    cedula_ruc character varying(20) not null,
    ruc character varying(30) not null,
    codigodactilar_ruc character varying(15) not null,
    nombres_ruc character varying(80) not null,
    apellidopaterno_ruc character varying(50) not null,
    apellidomaterno_ruc character varying(50) not null,
    fechanacimiento_ruc date not null,
    genero_ruc character varying(50) not null,
    correopersonal_ruc character varying(70) not null,
    celular_ruc character varying(20) not null,
    provincia_ruc character varying(50) not null,
    ciudad_ruc character varying(50) not null,
    direccion_ruc character varying(50) not null,
    tiempovigencia_ruc integer not null,
    fotocedulafrontal_ruc character varying(50) not null,
    fotocedulaposterior_ruc character varying(50) not null,
    fotoselfie_ruc character varying(50) not null,
    pdf_ruc character varying(50) not null,
    fototransferencia_ruc character varying(50) not null,
    created_at timestamp with time zone null default current_timestamp,
    updated_at timestamp with time zone null default current_timestamp,
    constraint firmaconruc_pkey primary key (idruc)
  ) tablespace pg_default;

create trigger update_modtime before
update on firmaconruc for each row
execute function update_modified_column ();
```

```
      create table
  public.firmadocumental (
    iddocumental serial,
    cedula_documental integer not null,
    codigodactilar_documental character varying(15) not null,
    nombres_documental character varying(80) not null,
    apellidopaterno_documental character varying(50) not null,
    apellidomaterno_documental character varying(50) not null,
    fechanacimiento_documental date not null,
    genero_documental character varying(50) not null,
    correopersonal_documental character varying(70) not null,
    celular_documental character varying(20) not null,
    provincia_documental character varying(50) not null,
    ciudad_documental character varying(50) not null,
    direccion_documental character varying(50) not null,
    tiempovigencia_documental integer not null,
    fotocedulafrontal_documental character varying(255) not null,
    fotocedulaposterior_documental character varying(255) not null,
    fotoselfie_documental character varying(255) not null,
    fototransferencia_documental character varying(255) not null,
    created_at timestamp with time zone null default current_timestamp,
    updated_at timestamp with time zone null default current_timestamp,
    constraint firmadocumental_pkey primary key (iddocumental)
  ) tablespace pg_default;

create trigger update_modtime before
update on firmadocumental for each row
execute function update_modified_column ();
```

```
      create table
  public.firmalegal (
    idlegal serial,
    cedula_legal character varying(20) not null,
    ruc_legal character varying(30) not null,
    codigodactilar_legal character varying(15) not null,
    nombres_legal character varying(80) not null,
    apellidopaterno_legal character varying(50) not null,
    apellidomaterno_legal character varying(50) not null,
    fechanacimiento_legal date not null,
    genero_legal character varying(50) not null,
    correopersonal_legal character varying(70) not null,
    celular_legal character varying(20) not null,
    rucempresa_legal character varying(30) not null,
    razonsocial_legal character varying(30) not null,
    cargorepresentante_legal character varying(30) not null,
    provincia_legal character varying(50) not null,
    ciudad_legal character varying(50) not null,
    direccion_legal character varying(50) not null,
    tiempovigencia_legal integer not null,
    fotocedulafrontal_legal character varying(50) not null,
    fotocedulaposterior_legal character varying(50) not null,
    fotoselfie_legal character varying(50) not null,
    pdf_legal character varying(50) not null,
    pdfconstitucioncompania_legal character varying(50) not null,
    pdfnombramientorepresentante_legal character varying(50) not null,
    pdfaceptamientonombramiento_legal character varying(50) not null,
    fototransferencia_legal character varying(50) not null,
    created_at timestamp with time zone null default current_timestamp,
    updated_at timestamp with time zone null default current_timestamp,
    constraint firmalegal_pkey primary key (idlegal)
  ) tablespace pg_default;

create trigger update_modtime before
update on firmalegal for each row
execute function update_modified_column ();
```	  

## Como correr el programa

1. Crear el archivo .env a la altura de la raiz del proyecto con el siguiente formato y colocar sus variables
```
      VITE_REACT_APP_SUPABASE_URL=
      VITE_REACT_APP_SUPABASE_ANON_KEY=
```	
      
2. Ingresar a la terminal del proyecto y correr el siguiente codigo para actualizar lo paquetes
```
    npm i
```

3. En la misma terminal correr el siguiente codigo para inciar el proyecto
```
    npm run dev
```


## Autores

Carol Jacome - Steven Oviedo (Cambios con firebase)

DIEGO MEDARDO SAAVEDRA GARCIA "statick88" (Codigo Original)
