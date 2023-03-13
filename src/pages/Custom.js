import React , { useState, useEffect } from 'react'
import axios from "axios";


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
    <div>
      <div>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="1">AMD</option>
          <option value="2">Intel</option>
        </select>
      </div>
      <div>
        <select>
          <option value="">Select an option</option>
          {rams.map(ram => (
            <option value={ram.componentName}>{ram.componentName}</option>
          ))}
        </select>
      </div>

      <div><select>
        <option value="">Select an option</option>
        {cpu.map(cpu => (
          <option value={cpu.componentName}>{cpu.componentName}</option>
        ))}
      </select></div>


      <div>
        <select>
          <option value="">Select an option</option>
          {psu.map(psu => (
            <option value={psu.componentName}>{psu.componentName}</option>
          ))}
        </select>
      </div>

      <div>
        <select>
          <option value="">Select an option</option>
          {vga.map(vga => (
            <option value={vga.componentName}>{vga.componentName}</option>
          ))}
        </select>
      </div>


      <div>
        <select>
          <option value="">Select an option</option>
          {luutru.map(luutru => (
            <option value={luutru.componentName}>{luutru.componentName}</option>
          ))}
        </select>
      </div>



      <div>
        <select>
          <option value="">Select an option</option>
          {bomachchu.map(bomachchu => (
            <option value={bomachchu.componentName}>{bomachchu.componentName}</option>
          ))}
        </select>
      </div>


      <div>
        <select>
          <option value="">Select an option</option>
          {tannhiet.map(tannhiet => (
            <option value={tannhiet.componentName}>{tannhiet.componentName}</option>
          ))}
        </select>
      </div>

      <select>
        <option value="">Select an option</option>
        {casePC.map(casePC => (
          <option value={casePC.componentName}>{casePC.componentName}</option>
        ))}
      </select>
    </div>
  );
}

export default Custom