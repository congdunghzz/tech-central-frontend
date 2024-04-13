import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProvinces, getDistrict, getWard } from "../../components/api/Province";
function CheckOut() {
    const location = useLocation()
    const product = location.state;
    const defaultProvince = {
        province_id: "0",
        province_name: " Thành Phố",
        province_type: "Thành phố Trung ương"
    }

    const defaultDistrict = {
        district_id: "0",
        district_name: " Quận / huyện",
        district_type: "Quận",
        province_id: "0"
    }
    const defaultWard = {
        district_id: "0",
        ward_id: "0",
        ward_name: "Phường / xã",
        ward_type: ""
    }

    const [provinces, setProvinces] = useState([defaultProvince]);
    const [districts, setDistricts] = useState([defaultDistrict]);
    const [wards, setWards] = useState([defaultWard]);

    const [province, setProvince] = useState(defaultProvince);
    const [district, setDistrict] = useState(defaultDistrict);
    const [ward, setWard] = useState(defaultWard);

    const [provinceName, setProvinceName] = useState('');
    const [districtName, setDistrictName] = useState('');
    const [wardName, setWardName] = useState('');
    const [address, setAddress] = useState('');

    const [itemList, setItemList] = useState([]);

    let cart = JSON.parse(window.localStorage.getItem("cart")) || [];


    const total = itemList.reduce((sum, item) => (sum + item.price * item.amount),0);
    useEffect(() => {
        setAddress(wardName + ", " + districtName + ", " + provinceName);
    }, [provinceName, districtName, wardName]);


    useEffect(() => {
        console.log(product);
        if (product) {
            setItemList([product])
        } else {
            setItemList(cart);
        }
    }, [])


    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await getProvinces();
                setProvinces(data.results);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await getDistrict(province);
                setDistricts(data.results);

            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };
        fetchData();
    }, [province]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWard(district);
                setWards(data.results);

            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };
        fetchData();
    }, [district]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-grid gap-2 col-1 me-auto">
                    <Link to="/cart">
                        <button className="btn btn-secondary" type="button">Cancel</button>
                    </Link>
                </div>
                <div className="d-grid gap-2 col-5 mx-auto">
                    <h2>Complete your order</h2>
                </div>
            </div>
            <hr></hr>

            <div className="my-5 px-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            itemList.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row">{index +1}</th>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            ))
                        }

                        <tr>
                            <th scope="row"></th>
                            <td colSpan="2">total:</td>
                            <td>${total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="my-5 px-5">
                <div className="input-group w-75">
                    <span className="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>
                <div className="input-group mb-3 w-75 my-4">
                    <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                    <input type="number" className="form-control" aria-label="Sizing example input" />
                </div>
                <div className="input-group ">
                    <span className="input-group-text">Address</span>
                    <select type="text" aria-label="First name"
                        className="form-control" value={province.province_name}
                        onChange={(e) => {
                            setProvince(e.target.value);
                            setProvinceName(e.target.options[e.target.selectedIndex].text);
                            setDistrictName('');
                            setWardName('');
                        }}>
                        <option value=''>Tỉnh / Thành Phố</option>
                        {provinces.map(item => (
                            <option key={item.province_id} value={item.province_id}>{item.province_name}</option>
                        ))}
                    </select>
                    <select type="text" aria-label="Last name"
                        className="form-control" value={district.district_name}
                        onChange={e => {
                            setDistrict(e.target.value)
                            setDistrictName(e.target.options[e.target.selectedIndex].text);
                            setWardName('');
                        }}>
                        <option value=''>Quận / Huyện</option>
                        {districts.map(item => (
                            <option key={item.district_id} value={item.district_id}>{item.district_name}</option>
                        ))}
                    </select>
                    <select type="text" aria-label="Last name"
                        className="form-control" value={ward.ward_name}
                        onChange={e => {
                            setWard(e.target.value);
                            setWardName(e.target.options[e.target.selectedIndex].text);
                        }}>
                        <option value=''>Phường / Xã</option>
                        {wards.map(item => (
                            <option key={item.ward_id} value={item.ward_id}>{item.ward_name}</option>
                        ))}

                    </select>
                    <input type="text" aria-label="First name" className="form-control" placeholder="Street name and house number" />
                </div>
            </div>

            <div className="d-grid gap-2 col-4 mx-auto">
                <Link to="/orders" className="w-100">
                    <button className="btn btn-primary w-100" type="button">Complete</button>
                </Link>
            </div>
        </div>
    );
}

export default CheckOut;