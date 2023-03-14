import React, { useState, useEffect } from 'react'
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Custom = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [rams, setRams] = useState([]);
  const [cpu, setCpu] = useState([]);
  const [psu, setPsu] = useState([]);
  const [bomachchu, setBomachchu] = useState([]);
  const [tannhiet, setTannhiet] = useState([]);
  const [vga, setVga] = useState([]);
  const [luutru, setLuutru] = useState([]);
  const [casePC, setCasePC] = useState([]);

  useEffect(() => {
    // RAM API
    const ramRequestBody = {
      attributeID: selectedOption,
      categoryID: "ram"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        ramRequestBody
      )
      .then((res) => {
        setRams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // CPU API
    const cpuRequestBody = {
      attributeID: selectedOption,
      categoryID: "cpu"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        cpuRequestBody
      )
      .then((res) => {
        setCpu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const psuRequestBody = {
      attributeID: selectedOption,
      categoryID: "psu"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        psuRequestBody
      )
      .then((res) => {
        setPsu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const tannhietRequestBody = {
      attributeID: selectedOption,
      categoryID: "tannhiet"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        tannhietRequestBody
      )
      .then((res) => {
        setTannhiet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const vgaRequestBody = {
      attributeID: selectedOption,
      categoryID: "vga"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        vgaRequestBody
      )
      .then((res) => {
        setVga(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const bomachchuRequestBody = {
      attributeID: selectedOption,
      categoryID: "bomachchu"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        bomachchuRequestBody
      )
      .then((res) => {
        setBomachchu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const luutruRequestBody = {
      attributeID: selectedOption,
      categoryID: "luutru"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        luutruRequestBody
      )
      .then((res) => {
        setLuutru(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const caseRequestBody = {
      attributeID: selectedOption,
      categoryID: "case"
    };

    axios
      .post(
        "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
        caseRequestBody
      )
      .then((res) => {
        setCasePC(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


  }, [selectedOption])
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong></strong>
      </h4>
      <div>
        <h1>TỰ LỰA CHỌN CẤU HÌNH PC</h1>
        <div>
        <h1>Nền tảng</h1>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="1">AMD</option>
            <option value="2">Intel</option>
          </select>
        </div>

        {selectedOption !== "" && (
          <>

            <div>
              <select >
                <option value="">Select Ram Option</option>
                {rams.map(ram => (
                  <option key={ram.componentID} value={ram.componentID}>{ram.componentName} ( + {ram.price.toLocaleString('vi-VN')} VNĐ)</option>
                ))}
              </select>
            </div>

            <div><select >
              <option value="">Select CPU Option</option>
              {cpu.map(cpu => (
                <option key={cpu.componentID} value={cpu.componentID}>{cpu.componentName} ( + {cpu.price.toLocaleString('vi-VN')} VNĐ)</option>
              ))}
            </select></div>


            <div>
              <select>
                <option value="">Select an option</option>
                {psu.map(psu => (
                  <option value={psu.componentID}>{psu.componentName} ( + {psu.price.toLocaleString('vi-VN')} VNĐ)</option>
                ))}
              </select>
            </div>

            <div>
              <select>
                <option value="">Select VGA option</option>
                {vga.map(vga => (
                  <option value={vga.componentID}>{vga.componentName} ( + {vga.price.toLocaleString('vi-VN')} VNĐ)</option>
                ))}
              </select>
            </div>


            <div>
              <select>
                <option value="">Select HDD/SSD option</option>
                {luutru.map(luutru => (
                  <option value={luutru.componentID}>{luutru.componentName} ( + {luutru.price.toLocaleString('vi-VN')} VNĐ)</option>
                ))}
              </select>
            </div>



            <div>
              <select>
                <option value="">Select Main option</option>
                {bomachchu.map(bomachchu => (
                  <option value={bomachchu.componentID}>{bomachchu.componentName} ( + {bomachchu.price.toLocaleString('vi-VN')} VNĐ)</option>
                ))}
              </select>
            </div>


            <div>
              <select>
                <option value="">Select FAN option</option>
                {tannhiet.map(tannhiet => (
                  <option value={tannhiet.componentID}>{tannhiet.componentName} ( + {tannhiet.price.toLocaleString('vi-VN')} VNĐ)</option>
                ))}
              </select>
            </div>

            <div>
              <select>
                <option value="">Select CASE option</option>
                {casePC.map(casePC => (
                  <option value={casePC.componentID}>{casePC.componentName} ( + {casePC.price.toLocaleString('vi-VN')} VNĐ)</option>
                ))}
              </select>
            </div>

          </>
        )}

      </div>

    </MDBContainer>


  );
}

export default Custom