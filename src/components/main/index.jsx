import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import Expenseview from "../expense-view";
import { GlobalContext } from "../../context";
import { useContext, useEffect } from "react";



function Main() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { TotalExpense, setTotalExpense,
        TotalIncome, allTransaction, setTotalIncome,} = useContext(GlobalContext);

    useEffect(() => {
        let income = 0;
        let expense = 0;
        allTransaction.forEach(item => {
            item.type === "income" ? income = income + parseFloat(item.amount) :
                expense = expense + parseFloat(item.amount)
        })

        setTotalExpense(expense)
        setTotalIncome(income)
    })

    return (
        <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
                <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']}>
                    Expense Tracker
                </Heading>
                <Flex alignItems={'center'}>
                    <Button onClick={onOpen} bg={'blue.700'} color={'white'} ml={'4'}>
                        Add New Transaction
                    </Button>

                </Flex>

            </Flex>

            <Summary TotalExpense={TotalExpense}
            TotalIncome = {TotalIncome} isOpen={isOpen} onClose={onClose}  />
            <Flex w='full'
                alignItems={"flex-start"}
                justifyContent={"space-evenly"}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
            >
                <Expenseview data={allTransaction.filter(item=> item.type === "expense")} type={"expense"} />
                <Expenseview data={allTransaction.filter(item=> item.type === "income")} type={"income"}/>
            </Flex>
        </Flex>
    );
}

export default Main;