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
        depth: node.depth + 1
    }
}

function limitedDepthFirstSearch(startingNode, limit) {
    let stack = []
    let answer = []
    if (goalTest(startingNode.state)) {
        return answer
    }
    availableMoves(startingNode.state).forEach(move => {
        stack.push(nodeGenerator(startingNode, move))
    })
    let lastState = startingNode.state
    while (stack.length !== 0){
        let currentNode = stack[stack.length - 1]
        answer.push(currentNode)
        if (goalTest(currentNode.state)) {
            return answer
        }
        stack.pop()
        if (currentNode.depth + 1 > limit) {
            answer.pop()
            continue
        }
        availableMoves(currentNode.state).forEach(move => {
            let nextNode = nodeGenerator(currentNode, move)
            if (JSON.stringify(nextNode.state) === JSON.stringify(lastState)) {} else {
                stack.push(nextNode)
            }
        })
    }
    return false
}

function IDS(startingNode) {
    let depth = 1
    while (true){
        let ans = limitedDepthFirstSearch(startingNode, depth)
        if (ans === false){
            depth++
        } else {
            let steps = [ans[ans.length - 1].state]
            let lastDepths = [ans[ans.length - 1].depth]
            for (let i=(ans.length - 1); i>=0; i--){
                if(!lastDepths.includes(ans[i].depth)) {
                    steps.push(ans[i].state)
                    lastDepths.push(ans[i].depth)
                }
            }
            steps.push(startingNode.state)
            return {
                foundOnDepth: depth,
                steps: steps.reverse()
            }
        }
    }
}

export default IDS