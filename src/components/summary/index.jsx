import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";
import TransactionChart from "../chart"


function Summary({onClose,isOpen,TotalExpense,TotalIncome}) {
    return (
        <Box p='6'
            border={'1px solid'}
            borderColor={'gray.100'}
            overflow={"hidden"}
            borderRadius={'10'}
            background={'white'}
            display={'flex'}

        >
            <Flex w='full'
                justifyContent={'center'}
                alignItems={'center'}
                flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: 'row',
                    xl: "row"
                }}
            >
                <Flex flex={1} w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} ml={'-20'} mr={"2"}>
                    <Heading size={'md'} mb={'4'} color={'grey.600'}>
                        Balance is {TotalIncome-TotalExpense}
                    </Heading>
                    <Flex justifyContent={"space-evenly"} alignItems={"center"} bg={"grey.50"}
                        w="full"
                        h="100px"
                        border={'1px solid'}
                        borderColor={"grey.100"}
                    >
                        <Flex flexDirection={"column"}>
                            <Heading>{TotalIncome}</Heading>
                            <Text color={'grey.600'}>
                                Total Income
                            </Text>

                        </Flex>

                    </Flex>
                    <Flex justifyContent={"space-evenly"} alignItems={"center"} bg={"grey.50"}
                        w="full"
                        h="100px"
                        border={'1px solid'}
                        borderColor={"grey.100"}
                    >
                        <Flex flexDirection={"column"}>
                            <Heading>{TotalExpense}</Heading>
                            <Text color={'grey.600'}>
                                Total Expense
                            </Text>

                        </Flex>

                    </Flex>

                </Flex>
                <Box flex={1} mt={'10'} ml={'-90px'}
                    mr={'5'} width={'300px'} height={'300px'} display={'flex'} alignItems={'center'} justifyContent={"center"}
                >
                    <Heading>
                        <TransactionChart expense={TotalExpense} income={TotalIncome}  />
                    </Heading>
                </Box>
            </Flex>
            <TransactionForm onClose={onClose} isOpen={isOpen} />
        </Box>
    );
}

export default Summary;