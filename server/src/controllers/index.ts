import {Request, Response} from 'express'

class Controller {
    public index(req: Request, res: Response){
        const number = Number(req.params.number)

        const result = findFibonacciElement(number)

        res.send({result})
    }
}

const controller = new Controller

export default controller

const findFibonacciElement = (n: number) =>{
    const fibonacciArray = [0,1] 

        for(let i = 2; i<= n ; i++){
            const newElement = fibonacciArray[i-2] + fibonacciArray[i-1]
            fibonacciArray.push(newElement)
        }

        return fibonacciArray[n]
}