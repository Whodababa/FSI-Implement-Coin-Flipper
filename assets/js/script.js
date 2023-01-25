// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
  
    let heads = 0
    let tails = 0
    let total = 0
    let headsPercent = 0
    let tailsPercent = 0
    
    
    // TODO: Add event listener and handler for flip and clear buttons
document.querySelector('#flip').addEventListener('click', function() {
    if (Math.random() > .5) {
        heads++
        total++
        headsPercent = (Math.round(heads/total * 100))
        if (tails > 0) {
            tailsPercent = (Math.round(tails/total * 100))
        }
        document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'
        document.querySelector('#message').innerHTML = 'You flipped heads!'
        document.querySelector('#heads').innerHTML = heads
        document.querySelector('#heads-percent').innerHTML = `${headsPercent}%`
        document.querySelector('#tails-percent').innerHTML = `${tailsPercent}%`
    } else {
        tails++
        total++
        tailsPercent = (Math.round(tails/total * 100))
        if (heads > 0) {
            headsPercent = (Math.round(heads/total * 100))
        }
        document.querySelector('#penny-image').src = 'assets/images/penny-tails.jpg'    
        document.querySelector('#message').innerHTML = 'You flipped tails!'
        document.querySelector('#tails').innerHTML = tails
        document.querySelector('#heads-percent').innerHTML = `${headsPercent}%`
        document.querySelector('#tails-percent').innerHTML = `${tailsPercent}%`
    }
})
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    document.querySelector('#clear').addEventListener('click', function() {
        heads = 0
        tails = 0
        total = 0
        headsPercent = 0
        tailsPercent = 0
        document.querySelector('#penny-image').src = 'assets/images/penny-heads.jpg'    
        document.querySelector('#message').innerHTML = 'Let\'s Get Flipping!'
        document.querySelector('#tails').innerHTML = tails
        document.querySelector('#heads').innerHTML = heads
        document.querySelector('#heads-percent').innerHTML = `${headsPercent}%`
        document.querySelector('#tails-percent').innerHTML = `${tailsPercent}%`
    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})