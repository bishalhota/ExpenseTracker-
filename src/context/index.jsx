import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [formdata, setFormdata] = useState({
        type: "expense",
        amount: 0,
        description: ""
    })

    const [expensecategories,setexpensecategories] = useState({
        food:0,
        entertainment:0,
        education:0,
        lifestyle:0,
    });

    const [value, setvalue] = useState("expense")

    const [TotalExpense, setTotalExpense] = useState(0)

    const [TotalIncome, setTotalIncome] = useState(0)

    const [allTransaction, setallTransaction] = useState([])

    function handleFormSubmit(CurrentData) {
        console.log(CurrentData);

        if (!CurrentData.description || !CurrentData.amount) return;

        setallTransaction([...allTransaction, { ...CurrentData, id: Date.now() }])
        setexpensecategories((prevCategories)=>({
            ...prevCategories,
            [formdata.type]: prevCategories[formdata.type] + parseFloat(formdata.amount),
        }));
    }


    return <GlobalContext.Provider
        value={{
            formdata, setFormdata,
            TotalExpense, setTotalExpense,
            TotalIncome, setTotalIncome,
            value, setvalue,
            allTransaction, setallTransaction,
            handleFormSubmit,expensecategories,setexpensecategories,
        }}

    >{children}</GlobalContext.Provider>
}