export default function CriptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency" className="">
          Moneda:
        </label>
        <select name="currency" id="currency" className="">
          -- Seleccione --
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency" className="">
          Moneda:
        </label>
        <select name="criptocurrency" id="criptocurrency" className="">
          -- Seleccione --
        </select>
      </div>
      <input type="submit" value="Cotizar" className="" />
    </form>
  );
}
