const blockManhattan = (board, block) => {
    const goalMapper = {
        1: [0, 1],
        2: [0, 2],
        3: [1, 0],
        4: [1, 1],
        5: [1, 2],
        6: [2, 0],
        7: [2, 1],
        8: [2, 2]
    }
    let distance = 0
    if (board[0].includes(block)) {
        distance += Math.abs(0 - goalMapper[block][0])
        distance += Math.abs(board[0].indexOf(block) - goalMapper[block][1])
    }
    else if (board[1].includes(block)) {
        distance += Math.abs(1 - goalMapper[block][0])
        distance += Math.abs(board[1].indexOf(block) - goalMapper[block][1])
    }
    else {
        distance += Math.abs(2 - goalMapper[block][0])
        distance += Math.abs(board[2].indexOf(block) - goalMapper[block][1])
    }
    return distance
}

const manhattanDistance = (board) => {
    let distance = 0
    for (let i=1; i<9; i++){
        distance += blockManhattan(board, i)
    }
    return distance
}

function getNumberPosition(state, number) {
    if (state[0].includes(number)){
        return [0, state[0].indexOf(number)]
    } else if (state[1].includes(number)){
        return [1, state[1].indexOf(number)]
    } else {
        return [2, state[2].indexOf(number)]
    }
}

function availableMoves(state) {
    let moveAbles = []
    let [emptyPosition, emptyIdx] = getNumberPosition(state, 0)

    if (emptyPosition === 0 && emptyIdx === 0){
        moveAbles = [
            state[0][1],
            state[1][0]
        ]
    } else if (emptyPosition === 0 && emptyIdx === 1){
        moveAbles = [
            state[0][0],
            state[0][2],
            state[1][1]
        ]
    } else if (emptyPosition === 0 && emptyIdx === 2){
        moveAbles = [
            state[0][1],
            state[1][2]
        ]
    } else if (emptyPosition === 1 && emptyIdx === 0){
        moveAbles = [
            state[0][0],
            state[1][1],
            state[2][0],
        ]
    } else if (emptyPosition === 1 && emptyIdx === 1){
        moveAbles = [
            state[0][1],
            state[1][0],
            state[1][2],
            state[2][1],
        ]
    } else if (emptyPosition === 1 && emptyIdx === 2){
        moveAbles = [
            state[0][2],
            state[1][1],
            state[2][2],
        ]
    } else if (emptyPosition === 2 && emptyIdx === 0){
        moveAbles = [
            state[1][0],
            state[2][1]
        ]
    } else if (emptyPosition === 2 && emptyIdx === 1){
        moveAbles = [
            state[2][0],
            state[1][1],
            state[2][2],
        ]
    } else{
        moveAbles = [
            state[1][2],
            state[2][1]
        ]
    }

    return moveAbles
}

function goalTest(state) {
    return JSON.stringify(state) === JSON.stringify([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
}

function nodeGenerator(node, number) {
    let [emptyPosition, emptyIdx] = getNumberPosition(node.state, 0)
    let [numberPosition, numberIdx] = getNumberPosition(node.state, number)

    let newState = JSON.parse(JSON.stringify(node.state))
    newState[numberPosition][numberIdx] = 0
    newState[emptyPosition][emptyIdx] = number

    return {
        state: newState,
        depth: node.depth + 1,
        parent: node,
        f: manhattanDistance(newState)
    }
}

function getBestNodeInStack(stack) {
    let selectedNodeIndex = 0
    let bestScore = stack[0].f
    for (let i=0; i<stack.length; i++){
        let currentScore = stack[i].f
        if (currentScore < bestScore) {
            bestScore = currentScore
            selectedNodeIndex = i
        }
    }
    return {nodeReturned:stack[selectedNodeIndex], indexReturned: selectedNodeIndex}
}

function GBFS(startingNode) {
    let stack = []
    startingNode.f = manhattanDistance(startingNode.state)
    stack.push(startingNode)
    while (stack.length !== 0) {
        let {nodeReturned, indexReturned} = getBestNodeInStack(stack)
        let currentNode = nodeReturned
        if (goalTest(currentNode.state)) {
            return currentNode
        }
        stack.splice(indexReturned, 1)
        availableMoves(currentNode.state).forEach(move => {
            let nextNode = nodeGenerator(currentNode, move)
            stack.push(nextNode)
        })
    }
    return false
}

function GreedyBFS(startingNode) {
    let ans = GBFS(startingNode)

    if (!ans) {
        alert("Something went wrong!")
    } else {
        let answer = []
        let cNode = ans
        while (cNode !== null){
            answer.push(cNode.state)
            cNode = cNode.parent
        }
        return {
            foundOnDepth: ans.depth,
            steps: answer.reverse()
        }
    }
}

export default GreedyBFS