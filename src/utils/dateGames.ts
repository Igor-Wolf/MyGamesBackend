// Função para obter a data de dois meses atrás no formato yyyy-mm-dd
export const getDataDoisMesesAtras = async () => {

    const dataAtual = new Date();
    dataAtual.setMonth(dataAtual.getMonth() - 2);
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const dia = String(dataAtual.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  }
  
  // Função para obter a data daqui a dois anos no formato yyyy-mm-dd
  export const getDataDoisAnosFuturo = async () => {

    const dataAtual = new Date();
    dataAtual.setFullYear(dataAtual.getFullYear() + 2);
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const dia = String(dataAtual.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}
  
  export const getDataAtual = async () => {
   
        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
        const dia = String(dataAtual.getDate()).padStart(2, "0");
        return `${ano}-${mes}-${dia}`;
}
  