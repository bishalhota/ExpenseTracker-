import { Button, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input, Radio, RadioGroup, ButtonGroup } from "@chakra-ui/react";
import { GlobalContext } from "../../context";
import { useContext } from "react";


function TransactionForm({ onClose, isOpen }) {

    const { formdata, setFormdata, value, setvalue, handleFormSubmit,setexpensecategories} = useContext(GlobalContext);

    function handleformChange(event) {
        setFormdata({
            ...formdata,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleFormSubmit(formdata);
    }

    function handleCategoryChange(category){
        console.log(category);
        setexpensecategories((prevCategories)=>({
            ...prevCategories,
            [category]:prevCategories[category] + parseFloat(formdata.amount),
        }));
    }

    return (



        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            Add new Transaction
                        </ModalHeader>
                        <ModalCloseButton></ModalCloseButton>
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Enter Description</FormLabel>
                                <Input
                                    placeholder="Enter Transaction"
                                    name="description"
                                    type="text"
                                    onChange={handleformChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Enter Description</FormLabel>
                                <Input
                                    placeholder="Enter Transaction Amount"
                                    name="amount"
                                    type="number"
                                    onChange={handleformChange}
                                />
                            </FormControl>
                            <RadioGroup mt="5" value={value} onChange={setvalue}>
                                <Radio
                                    checked={formdata.type === "income"}
                                    colorScheme="blue"
                                    value="income"  // values are the attributes which are submitted when the button is clicked we can acess by using values . value="income" means when the button is selected then the form data will include type:"income"
                                    name="type"   // name is used to group all the radio buttons together so that only one from all those buttons can be selected.
                                    onChange={handleformChange}
                                >Income</Radio>
                                <Radio
                                    value="food"
                                    colorScheme="red"
                                    
                                >Food</Radio>
                                <Radio
                                    value="Entertainment"
                                    colorScheme="red"

                                >Entertainment</Radio>
                                <Radio
                                    value="education"
                                    colorScheme="red"
                                
                                >Education</Radio>
                                <Radio
                                    value="expense"
                                    colorScheme="red"
                                
                                >Lifestyle</Radio>
                                <Radio
                                    checked={formdata.type === "expense"}
                                    colorScheme="red"
                                    value="expense"
                                    name="type"
                                    onChange={handleformChange}
                                >Expense</Radio>
                            </RadioGroup>
                            <ButtonGroup mt="5">
                                <Button onClick={() => handleCategoryChange("food")} >Food</Button>
                                <Button onClick={() => handleCategoryChange("entertainment")} >Entertainment</Button>
                                <Button onClick={() => handleCategoryChange("education")} >Education</Button>
                                <Button onClick={() => handleCategoryChange("lifestyle")} >Lifestyle</Button>
                            </ButtonGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button mr={'5'} onClick={onClose}>Cancel</Button>
                            <Button
                                onClick={onClose}
                                type="submit">Add</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </form>
        </Modal>
    );
}

export default TransactionForm;