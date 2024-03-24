
const getProvinces = async () =>{
    const response = await fetch(`https://vapi.vnappmob.com/api/province`)
    const data = await response.json();
    return data;
}

const getDistrict = async (provinceId) =>{
    const response = await fetch(`https://vapi.vnappmob.com/api/province/district/${provinceId}`)
    const data = await response.json();
    return data;
         
}
const getWard = async (districtId) => {
    const response = await fetch(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
    const data = await response.json();
    return data;
         
}

export {getProvinces, getDistrict, getWard}