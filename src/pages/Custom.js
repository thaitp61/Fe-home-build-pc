import React, { useState, useEffect } from 'react'
import axios from "axios";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Custom = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [quantity, setQuantity] = useState(1); // Thêm state để lưu trữ giá trị số lượng
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleProductSelect = (product, price) => {
    const newSelectedProducts = [...selectedProducts];
    const existingProductIndex = newSelectedProducts.findIndex(
      (item) => item.product === product
    );
    if (existingProductIndex >= 0) {
      newSelectedProducts[existingProductIndex].price = price * quantity;
      newSelectedProducts[existingProductIndex].quantity = quantity;   
     } else {
      newSelectedProducts.push({ product, price: price * quantity, quantity });
    }
    setSelectedProducts(newSelectedProducts);
    setTotalPrice(
      newSelectedProducts.reduce((total, item) => total + item.price * quantity, 0)
    );
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value)); // Lưu trữ giá trị số lượng mới từ input
    setTotalPrice(
      selectedProducts.reduce((total, item) => total + item.price * Number(event.target.value), 0) // Cập nhật tổng giá trị với số lượng mới
    );
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
        <h1 class="alert alert-info clearfix">TỰ LỰA CHỌN CẤU HÌNH PC</h1>
        <Form.Group className="mb-3">
          <Form.Label class="text-danger">Nền tảng</Form.Label>
          <Form.Select value={selectedOption} onChange={handleSelectChange} >
            <option value="">Select an option</option>
            <option value="1">AMD</option>
            <option value="2">Intel</option>
          </Form.Select>
        </Form.Group>

        {selectedOption !== "" && (
          <>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">RAM</Form.Label>
                <Form.Select onChange={(e) =>
                  handleProductSelect("RAM", Number(e.target.value))
                }
                >
                  <option value="">Select Ram Option</option>
                  {rams.map(ram => (
                    <option key={ram.componentID} value={ram.price}>{ram.componentName} ( + {ram.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">CPU</Form.Label>
                <Form.Select onChange={(e) => handleProductSelect("CPU", Number(e.target.value))}>


                  <option value="">Select CPU Option</option>
                  {cpu.map(cpu => (
                    <option key={cpu.componentID} value={cpu.price}>{cpu.componentName} ( + {cpu.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>


            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Nguồn</Form.Label>
                <Form.Select onChange={(e) => handleProductSelect("PSU", Number(e.target.value))}>
                  <option value="">Select an option</option>
                  {psu.map(psu => (
                    <option key={psu.componentID}  value={psu.price}>{psu.componentName} ( + {psu.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">VGA</Form.Label>
                <Form.Select onChange={(e) => handleProductSelect("VGA", Number(e.target.value))}>
                  <option value="">Select VGA option</option>
                  {vga.map(vga => (
                    <option key={vga.componentID}  value={vga.price}>{vga.componentName} ( + {vga.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>


            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Lưu trữ</Form.Label>
                <Form.Select onChange={(e) => handleProductSelect("LUUTRU", Number(e.target.value))}>
                  <option value="">Select SSD option</option>
                  {luutru.map(luutru => (
                    <option key={luutru.componentID} value={luutru.price}>{luutru.componentName} ( + {luutru.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Main</Form.Label>
                <Form.Select onChange={(e) => handleProductSelect("BOMACHCHU", Number(e.target.value))}>
                  <option value="">Select Main option</option>
                  {bomachchu.map(bomachchu => (
                    <option  key={bomachchu.componentID}  value={bomachchu.price}>{bomachchu.componentName} ( + {bomachchu.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Tản nhiệt CPU</Form.Label>
                <Form.Select onChange={(e) => handleProductSelect("TANNHIET", Number(e.target.value))}>
                  <option value="">Select FAN option</option>
                  {tannhiet.map(tannhiet => (
                    <option key={tannhiet.componentID}  value={tannhiet.price}>{tannhiet.componentName} ( + {tannhiet.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div>
              <Form.Group className="mb-3">
                <Form.Label class="text-danger">Case</Form.Label>
                <Form.Select onChange={(e) => handleProductSelect("CASEPC", Number(e.target.value))}>
                  <option value="">Select CASE option</option>
                  {casePC.map(casePC => (
                    <option key={casePC.componentID}  value={casePC.price}>{casePC.componentName} ( + {casePC.price.toLocaleString('vi-VN')} VNĐ)</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

          </>
        )}
      </div>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (VND)</span>
        <strong>{totalPrice.toLocaleString('vi-VN')}  VNĐ</strong>
      </li>
      <input
        type="number"
        placeholder="Quantity"
       
        onChange={handleQuantityChange}
      />
      &ensp;
      <Button variant="primary" className="add-to-cart-btn" >
        <FaCartPlus className="cart-icon" />
        Add to cart
      </Button>
      &ensp;
      <Link to="/checkout/">
        <Button variant="primary" className="add-to-cart-btn" >
          <FaShoppingCart className="cart-icon" />
          Buy Now
        </Button>
      </Link>

    </MDBContainer>
  );
}

export default Custom

// import React, { useState, useEffect } from 'react'
// import axios from "axios";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBIcon,
//   MDBBtn,
//   MDBRipple,
// } from "mdb-react-ui-kit";
// import Form from 'react-bootstrap/Form';

// const Custom = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

  
//   const [rams, setRams] = useState([]);
//   const [cpu, setCpu] = useState([]);
//   const [psu, setPsu] = useState([]);
//   const [bomachchu, setBomachchu] = useState([]);
//   const [tannhiet, setTannhiet] = useState([]);
//   const [vga, setVga] = useState([]);
//   const [luutru, setLuutru] = useState([]);
//   const [casePC, setCasePC] = useState([]);
  
  
  
//   useEffect(() => {
//     // RAM API
//     const ramRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "ram"
//     };
    
//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         ramRequestBody
//       )
//       .then((res) => {
//         setRams(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     // CPU API
//     const cpuRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "cpu"
//     };

//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         cpuRequestBody
//       )
//       .then((res) => {
//         setCpu(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     const psuRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "psu"
//     };

//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         psuRequestBody
//       )
//       .then((res) => {
//         setPsu(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     const tannhietRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "tannhiet"
//     };

//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         tannhietRequestBody
//       )
//       .then((res) => {
//         setTannhiet(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     const vgaRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "vga"
//     };

//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         vgaRequestBody
//       )
//       .then((res) => {
//         setVga(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     const bomachchuRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "bomachchu"
//     };

//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         bomachchuRequestBody
//       )
//       .then((res) => {
//         setBomachchu(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     const luutruRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "luutru"
//     };

//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         luutruRequestBody
//       )
//       .then((res) => {
//         setLuutru(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     const caseRequestBody = {
//       attributeID: selectedOption,
//       categoryID: "case"
//     };

//     axios
//       .post(
//         "https://server-buildingpc.herokuapp.com/component/customComponentByAttribute",
//         caseRequestBody
//       )
//       .then((res) => {
//         setCasePC(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });


//   }, [selectedOption])

//   const [selectedRam, setSelectedRam] = useState(null);
//   const [selectedCpu, setSelectedCpu] = useState(null);
//   const [selectedBoMachChu, setSelectedBoMachChu] = useState(null);
//   const [selectedVga, setSelectedVga] = useState(null);
//   const [selectedLuutru, setSelectedLuutru] = useState(null);
//   const [selectedPsu, setSelectedPsu] = useState(null);
//   const [selectedCasePC, setSelectedCasePC] = useState(null);
//   const [selectedTanNhiet, setSelectedTanNhiet] = useState(null);
//   const [productID, setProductID] = useState("");
//   const [amount, setAmount] = useState(1);
//   const [selectedOptions, setSelectedOptions] = useState([]);



// const handleSelectComponentChange = (event) => {
//   const { name, value } = event.target;
//   switch (name) {
//     case "ram":
//       setSelectedRam(value);
//       break;
//     case "cpu":
//       setSelectedCpu(value);
//       break;
//     case "bomachchu":
//       setSelectedBoMachChu(value);
//       break;
//     case "vga":
//       setSelectedVga(value);
//       break;
//     case "luutru":
//       setSelectedLuutru(value);
//       break;
//     case "psu":
//       setSelectedPsu(value);
//       break;
//     case "casePC":
//       setSelectedCasePC(value);
//       break;
//     case "tannhiet":
//       setSelectedTanNhiet(value);
//       break;
//     default:
//       break;
//   }
// };


//   const handleProductIDChange = (e) => {
//     setProductID(e.target.value);
//   }

    
//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };


//   const handleAddOptions = () => {
//     if (selectedRam && selectedCpu ) {
//       setSelectedOptions([...selectedOptions, { ram: selectedRam, cpu: selectedCpu, bomachchu: selectedBoMachChu, vga: selectedVga, luutru: selectedLuutru, psu: selectedPsu, casePC: selectedCasePC, tannhiet: selectedTanNhiet}]);
//       setSelectedRam(null);
//       setSelectedBoMachChu(null);  
//       setSelectedVga(null);  
//       setSelectedLuutru(null);  
//       setSelectedPsu(null);  
//       setSelectedCasePC(null);  
//       setSelectedTanNhiet(null);  
//     }
//   };

//   useEffect(() => {
//     if (selectedOptions.length > 0) {
//       const requestBody = {
//         productID: productID,
//         listComponent: selectedOptions.map(option => [option.ram, option.cpu, option.bomachchu, option.vga, option.luutru, option.psu, option.casePC, option.tannhiet]).flat(),
//         amount: amount,
//         total: 25000000,
//       };
//       axios.post('https://server-buildingpc.herokuapp.com/product/addProduct', requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//         .then((response) => {
//           console.log(response.data);
//           // Handle success response here
//         })
//         .catch((error) => {
//           console.error(error);
//           // Handle error response here
//         });
//     }
//   }, [selectedOptions]);
  

//   return (
//     <MDBContainer fluid className="my-5 text-center">
//       <h4 className="mt-4 mb-5">
//         <strong></strong>
//       </h4>
//       <div>
//         <h1 class="alert alert-info clearfix">TỰ LỰA CHỌN CẤU HÌNH PC</h1>
//         <Form.Group className="mb-3">
//           <Form.Label class="text-danger">Nền tảng</Form.Label>
//           <Form.Select value={selectedOption} onChange={handleSelectChange} >
//             <option value="">Select an option</option>
//             <option value="1">AMD</option>
//             <option value="2">Intel</option>
//           </Form.Select>
//         </Form.Group>

//         {selectedOption !== "" && (
//           <>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">Product Name</Form.Label>
//                 <Form.Control type="text" value={productID} onChange={handleProductIDChange} />
//               </Form.Group>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">RAM</Form.Label>
//                 <Form.Select name="ram" value={selectedRam} onChange={handleSelectComponentChange}>
//                   <option value="">Select Ram Option</option>
//                   {rams.map(ram => (
//                     <option key={ram.componentID} value={ram.componentID}>{ram.componentName} ( + {ram.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">CPU</Form.Label>
//                 <Form.Select name="cpu" value={selectedCpu} onChange={handleSelectComponentChange}>
//                   <option value="">Select CPU Option</option>
//                   {cpu.map(cpu => (
//                     <option key={cpu.componentID} value={cpu.componentID}>{cpu.componentName} ( + {cpu.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">Nguồn</Form.Label>
//                 <Form.Select name="psu" value={selectedPsu} onChange={handleSelectComponentChange}>
//                   <option value="">Select an option</option>
//                   {psu.map(psu => (
//                     <option key={psu.componentID} value={psu.componentID}>{psu.componentName} ( + {psu.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">VGA</Form.Label>
//                 <Form.Select name="vga" value={selectedVga} onChange={handleSelectComponentChange}>
//                   <option value="">Select VGA option</option>
//                   {vga.map(vga => (
//                     <option key={vga.componentID} value={vga.componentID}>{vga.componentName} ( + {vga.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">Lưu trữ</Form.Label>
//                 <Form.Select name="luutru" value={selectedLuutru} onChange={handleSelectComponentChange}>
//                   <option value="">Select SSD option</option>
//                   {luutru.map(luutru => (
//                     <option key={luutru.componentID} value={luutru.componentID}>{luutru.componentName} ( + {luutru.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">Main</Form.Label>
//                 <Form.Select name="bomachchu" value={selectedBoMachChu} onChange={handleSelectComponentChange}>
//                   <option value="">Select Main option</option>
//                   {bomachchu.map(bomachchu => (
//                     <option key={bomachchu.componentID} value={bomachchu.componentID}>{bomachchu.componentName} ( + {bomachchu.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">Tản nhiệt CPU</Form.Label>
//                 <Form.Select name="tannhiet" value={selectedTanNhiet} onChange={handleSelectComponentChange}>
//                   <option value="">Select FAN option</option>
//                   {tannhiet.map(tannhiet => (
//                     <option key={tannhiet.componentID} value={tannhiet.componentID}>{tannhiet.componentName} ( + {tannhiet.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//               <Form.Group className="mb-3">
//                 <Form.Label class="text-danger">Case</Form.Label>
//                 <Form.Select name="casePC" value={selectedCasePC} onChange={handleSelectComponentChange}>
//                   <option value="">Select CASE option</option>
//                   {casePC.map(casePC => (
//                     <option key={casePC.componentID} value={casePC.componentID}>{casePC.componentName} ( + {casePC.price.toLocaleString('vi-VN')} VNĐ)</option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </div>
//             <div>
//             <label htmlFor="amountInput">Amount:</label>
//               <input type="number" id="amountInput" value={amount} onChange={handleAmountChange} />
//             </div>
//             <button onClick={handleAddOptions}>Add Product</button>
//           </>
//         )}

//       </div>

//     </MDBContainer>


//   );
// }

// export default Custom