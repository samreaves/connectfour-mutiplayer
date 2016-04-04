/* 
 * ConnectFour Flat
 * Written by Sam Reaves
 * October 2013
 */




/* 
dropToken - Uses jQuery to drop the current token div element to the space   
*/ 
function dropToken(token, space) {
    // If current space mod 6 is equal to zero, animate down to the bottom space in half a second's time.
    if (space % 6 === 0) {
        $(token).animate({
            top: "495"
        }, 500);
    }
    // If current space mod 5 is equal to zero, animate down to the fifth space in half a second's time.
    else if (space % 5 === 0) {
        $(token).animate({
            top: "416"
        }, 500);
    }
    // If current space mod 4 is equal to zero, animate down to the fourth space in half a second's time.
    else if (space % 4 === 0) {
        $(token).animate({
            top: "337"
        }, 500);
    }
    // If current space mod 3 is equal to zero, animate down to the third space in half a second's time.
    else if (space % 3 === 0) {
        $(token).animate({
            top: "258"
        }, 500);
    }
    // If current space mod 2 is equal to zero, animate down to the second space in half a second's time.
    else if (space % 2 === 0) {
        $(token).animate({
            top: "179"
        }, 500);
    }
    // If current space mod 1 is equal to zero, animate down to the top space in half a second's time.
    else if (space % 1 === 0) {
        $(token).animate({
            top: "100"
        }, 500);
    }
    // Remove the current token class from the dropped token, as it is no longer the current token.
    $(".currenttoken").removeClass("currenttoken");

    // Remove token class as it will no longer be dropped.
    $(token).removeClass("token");

    // Add playedToken class to it as is now played.
    $(token).addClass("playedToken");
}

/*
Sets up empty gameboard. Gameboard is comprised of an array of columns, each containing an array of spaces.
*/
var gameboard = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
var tokencount = 1;



/* 
Check for horizontal win. Pass in player to see if they won
*/
function checkForHorizontalWin(player) {
    
    // For each space
    for (var spaces = 0; spaces < 6; spaces++) {
        
        // Store consecutive tokens in local variable
        var consecutiveTokens = 0;

        // For each column 
        for (var columns = 0; columns < 7; columns++) {

            // If we found a token in that column and space
            if (gameboard[columns][spaces] === player) {

                // Increment consecutive tokens
                consecutiveTokens++;

                // If consecutive tokens is 4
                if (consecutiveTokens === 4) {

                    // We have a winner!
                    return true;
                }
            } 

            // If we did not find a token in that space
            else {
                // There is a space between tokens. Reset consecutive tokens
                consecutiveTokens = 0;
            }
        }
    }
    // After scanning through the spaces, we never found a winner
    return false;
}



/*
Check for vertical win. Pass in player to see if they won
*/
function checkForVerticalWin(player) {
    
    // For each column
    for (var columns = 0; columns < 7; columns++) {

        // Store consecutive tokens in local variable
        var consecutiveTokens = 0;
        for (var spaces = 0; spaces < 6; spaces++) {

            // If we found a token in that column and space
            if (gameboard[columns][spaces] === player) {

                // Increment consecutive tokens
                consecutiveTokens++;

                // If consecutive tokens is 4
                if (consecutiveTokens === 4) {

                    // We have a winner!
                    return true;
                }
            } 
            // If we did not find a token in that space
            else {
                // There is a space between tokens. Reset consecutive tokens
                consecutiveTokens = 0;
            }
        }
    }
    // After scanning through the spaces, we never found a winner
    return false;
}



/* 
Check for upward diagonal win. Pass in player to see if they won.
*/
function checkForUpwardDiagonalWin(player) {
    // Set up local variables to store column and space numbers
    var columns;
    var spaces;

    // These check every combination of upward diagonal win. Quite gnarly.
    for (var columnsStart = 0; columnsStart < 4; columnsStart++) {
        for (var spacesStart = 5; spacesStart > 2; spacesStart--) {
            if (columnsStart === 0 && spacesStart === 5) {
                var consecutiveTokens = 0;
                for (columns = 0, spaces = 5; columns < 6, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 0 && spacesStart === 4) {
                var consecutiveTokens = 0;
                for (columns = 0, spaces = 4; columns < 5, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 0 && spacesStart === 3) {
                var consecutiveTokens = 0;
                for (columns = 0, spaces = 3; columns < 4, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 1 && spacesStart === 5) {
                var consecutiveTokens = 0;
                for (columns = 1, spaces = 5; columns < 7, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 1 && spacesStart === 4) {
                var consecutiveTokens = 0;
                for (columns = 1, spaces = 4; columns < 6, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 1 && spacesStart === 3) {
                var consecutiveTokens = 0;
                for (columns = 1, spaces = 3; columns < 5, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 2 && spacesStart === 5) {
                var consecutiveTokens = 0;
                for (columns = 2, spaces = 5; columns < 6, spaces >= 1; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 2 && spacesStart === 4) {
                var consecutiveTokens = 0;
                for (columns = 2, spaces = 4; columns < 5, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 2 && spacesStart === 3) {
                var consecutiveTokens = 0;
                for (columns = 2, spaces = 3; columns < 4, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 3 && spacesStart === 5) {
                var consecutiveTokens = 0;
                for (columns = 3, spaces = 5; columns < 7, spaces >= 2; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 3 && spacesStart === 4) {
                var consecutiveTokens = 0;
                for (columns = 3, spaces = 4; columns < 7, spaces >= 1; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 3 && spacesStart === 3) {
                var consecutiveTokens = 0;
                for (columns = 3, spaces = 3; columns < 7, spaces >= 0; columns++, spaces--) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
        }
    }

    // We never found a winner.
    return false;
}

/* 
Check for downward diagonal win. Pass in player to see if they won
*/
function checkForDownwardDiagonalWin(player) {

    // Set up local variable to store columns and spaces
    var columns;
    var spaces;

    // This checks every possible combination for downward diagonal win. Quite gnarly.
    for (var columnsStart = 0; columnsStart < 4; columnsStart++) {
        for (var spacesStart = 0; spacesStart < 3; spacesStart++) {
            if (columnsStart === 0 && spacesStart === 0) {
                var consecutiveTokens = 0;
                for (columns = 0, spaces = 0; columns < 6, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 0 && spacesStart === 1) {
                var consecutiveTokens = 0;
                for (columns = 0, spaces = 1; columns < 5, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 0 && spacesStart === 2) {
                var consecutiveTokens = 0;
                for (columns = 0, spaces = 2; columns < 4, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 1 && spacesStart === 0) {
                var consecutiveTokens = 0;
                for (columns = 1, spaces = 0; columns < 7, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 1 && spacesStart === 1) {
                var consecutiveTokens = 0;
                for (columns = 1, spaces = 1; columns < 6, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 1 && spacesStart === 2) {
                var consecutiveTokens = 0;
                for (columns = 1, spaces = 2; columns < 5, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 2 && spacesStart === 0) {
                var consecutiveTokens = 0;
                for (columns = 2, spaces = 0; columns < 7, spaces < 5; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 2 && spacesStart === 1) {
                var consecutiveTokens = 0;
                for (columns = 2, spaces = 1; columns < 7, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 2 && spacesStart === 2) {
                var consecutiveTokens = 0;
                for (columns = 2, spaces = 2; columns < 5, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 3 && spacesStart === 0) {
                var consecutiveTokens = 0;
                for (columns = 3, spaces = 0; columns < 7, spaces < 4; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 3 && spacesStart === 1) {
                var consecutiveTokens = 0;
                for (columns = 3, spaces = 1; columns < 6, spaces < 5; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
            if (columnsStart === 3 && spacesStart === 2) {
                var consecutiveTokens = 0;
                for (columns = 3, spaces = 2; columns < 5, spaces < 6; columns++, spaces++) {
                    if (gameboard[columns][spaces] === player) {
                        consecutiveTokens++;
                        if (consecutiveTokens === 4) {
                            return true;
                        }
                    } else {
                        consecutiveTokens = 0;
                    }
                }
            }
        }
    }
    // We never found a winner.
    return false;
}

/* 
Check for all types of wins. Pass in player to see if they won
*/
function checkForWin(player) {
    if (checkForHorizontalWin(player)) {
        return true;
    }
    if (checkForVerticalWin(player)) {
        return true;
    }
    if (checkForUpwardDiagonalWin(player)) {
        return true;
    }
    if (checkForDownwardDiagonalWin(player)) {
        return true;
    }
    return false;
}

/* 
Check to see if the game board is full of tokens
*/
function checkForFull() {

    // For each column
    for (var columns = 0; columns < 7; columns++) {

        // For each space inside the column
        for (var spaces = 0; spaces < 6; spaces++) {

            // If any space is empty, return false
            if (gameboard[columns][spaces] === 0) {
                return false;
            }
        }
    }
    // We iterated through all spaces and never returned false, so the gameboard must be full.
    return true;
}


/* 
    addPiece - Adds token to the board. Pass in currentToken, currentPlayer and currentColumn 
               Player number is placed inside the board to keep track of whose token it was 
*/
function addPiece(token, player, currentColumn) {
    if (player === true) {
        // 1 = player1 
        player = 1;
    }
    else {
        // 2 = player2. 
        player = 2;
    }

    /* 
    Validation to see into which space token drops 
    */

    // If current column is 1
    if (currentColumn === 1) {

        // If the bottom space of column 1 is empty
        if (gameboard[0][5] === 0) {

            // That space now contains the player who dropped a token into it
            gameboard[0][5] = player;

            // Drop the token into it.
            dropToken(token, 6);
        }

        // Repeat :)
        else if (gameboard[0][4] === 0) {
            gameboard[0][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[0][3] === 0) {
            gameboard[0][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[0][2] === 0) {
            gameboard[0][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[0][1] === 0) {
            gameboard[0][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[0][0] === 0) {
            gameboard[0][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 2) {
        if (gameboard[1][5] === 0) {
            gameboard[1][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[1][4] === 0) {
            gameboard[1][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[1][3] === 0) {
            gameboard[1][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[1][2] === 0) {
            gameboard[1][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[1][1] === 0) {
            gameboard[1][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[1][0] === 0) {
            gameboard[1][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 3) {
        if (gameboard[2][5] === 0) {
            gameboard[2][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[2][4] === 0) {
            gameboard[2][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[2][3] === 0) {
            gameboard[2][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[2][2] === 0) {
            gameboard[2][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[2][1] === 0) {
            gameboard[2][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[2][0] === 0) {
            gameboard[2][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 4) {
        if (gameboard[3][5] === 0) {
            gameboard[3][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[3][4] === 0) {
            gameboard[3][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[3][3] === 0) {
            gameboard[3][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[3][2] === 0) {
            gameboard[3][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[3][1] === 0) {
            gameboard[3][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[3][0] === 0) {
            gameboard[3][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 5) {
        if (gameboard[4][5] === 0) {
            gameboard[4][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[4][4] === 0) {
            gameboard[4][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[4][3] === 0) {
            gameboard[4][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[4][2] === 0) {
            gameboard[4][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[4][1] === 0) {
            gameboard[4][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[4][0] === 0) {
            gameboard[4][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 6) {
        if (gameboard[5][5] === 0) {
            gameboard[5][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[5][4] === 0) {
            gameboard[5][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[5][3] === 0) {
            gameboard[5][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[5][2] === 0) {
            gameboard[5][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[5][1] === 0) {
            gameboard[5][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[5][0] === 0) {
            gameboard[5][0] = player;
            dropToken(token, 1);
        }
    }
    else if (currentColumn === 7) {
        if (gameboard[6][5] === 0) {
            gameboard[6][5] = player;
            dropToken(token, 6);
        }
        else if (gameboard[6][4] === 0) {
            gameboard[6][4] = player;
            dropToken(token, 5);
        }
        else if (gameboard[6][3] === 0) {
            gameboard[6][3] = player;
            dropToken(token, 4);
        }
        else if (gameboard[6][2] === 0) {
            gameboard[6][2] = player;
            dropToken(token, 3);
        }
        else if (gameboard[6][1] === 0) {
            gameboard[6][1] = player;
            dropToken(token, 2);
        }
        else if (gameboard[6][0] === 0) {
            gameboard[6][0] = player;
            dropToken(token, 1);
        }
    }

    // If the game is not won and the board is not full
    if (!checkForWin(player) && !checkForFull()) {
        
        // Increment the token count
        tokencount++;

        // Change Player Number
        // If token count mod 2 is equal to 1, player 2 just played. It's player 1's turn
        if (tokencount % 2 === 1) {

            // Append  player 1 token to drop space
            $("#drop_space").append("<div class=\"token player1 currenttoken\" id=\"token" + tokencount + "\"></div>");
            
            // Set header text to player 1
            $("#header h1").text("Player 1");
        }
        // If token count mod 1 is equal to zero, player 1 just played. It's player 2's turn
        else {

            // Append  player 2 token to drop space 
            $("#drop_space").append("<div class=\"token player2 currenttoken\" id=\"token" + tokencount + "\"></div>");
            
            // Set header text to player 1
            $("#header h1").text("Player 2");
        }
    }

    // If check for win successful
    else if (checkForWin(player)) {
        
        // Set header text to alert who won
        $("#header h1").text("Player " + player + " Wins!");
        
        // Set messages text to say great game
        $("#messages").text("Great game, guys.");

        // Add padding to drop space for Play Again button
        $("#drop_space").css("padding", "20px 0 0 0");

        // Append play again button to drop space
        $("#drop_space").append("<div class=\"playAgain\">Click to Play Again</div>");
    }

    // If the game board is full and there is no win
    else if (checkForFull() && !checkForWin(player)) {

        // Set header text to let everyone know the game is a tie
        $("header h1").text("It's a Tie!");

        // Set header text. It was a great game, wasn't it?
        $("#messages").text("Great game, guys.");

        // Set drop space padding to give room for "Click to Play Again"
        $("#drop_space").css("padding", "20px 0 0 0");

        // Add play again button to drop space 
        $("#drop_space").append("<div class=\"playAgain\">Click to Play Again</div>");
    }
}


// When the page loads, fire this function
$(document).ready(function() {

    // Create empty variables to store the mouse position on the screen and the current column
    var currentMousePos;
    var currentColumn;

    // When the mouse is positioned in a drop space, fire the following function
    $("#drop_space").mousemove(function(e) {

        // The game board is offset from the left side of the screen. This sets our current mouse position value to adjust for that
        currentMousePos = e.pageX - $('#drop_space').offset().left - 38;

        /* 
        Check to see which column the mouse is above. Once we know the column, we move 
        the token above that column and set the currentColumn variable to that column
        */
        if (currentMousePos < 61) {
            $(".currenttoken").css("left", "18px");
            currentColumn = 1;
        }
        else if (currentMousePos >= 61 && currentMousePos < 144) {
            $(".currenttoken").css("left", "101px");
            currentColumn = 2;
        }
        else if (currentMousePos >= 144 && currentMousePos < 227) {
            $(".currenttoken").css("left", "184px");
            currentColumn = 3;
        }
        else if (currentMousePos >= 227 && currentMousePos < 310) {
            $(".currenttoken").css("left", "267px");
            currentColumn = 4;
        }
        else if (currentMousePos >= 310 && currentMousePos < 393) {
            $(".currenttoken").css("left", "350px");
            currentColumn = 5;
        }
        else if (currentMousePos >= 393 && currentMousePos < 476) {
            $(".currenttoken").css("left", "433px");
            currentColumn = 6;
        }
        else if (currentMousePos >= 476) {
            $(".currenttoken").css("left", "516px");
            currentColumn = 7;
        }
    });

    // When a token is clicked inside a drop space, add the piece 
    $("#drop_space").on('click', '.token', function(e) {

        /* 
        Call addPiece with: 
            current token element (this) 
            boolean of if player 1 is playing 
            the current column number
        */
        addPiece(this, $(".currenttoken").hasClass("player1"), currentColumn);
    });

    // If the white box was clicked under change background
    $("#change_background").on('click', '#background_change_white', function() {

        // Change the background color of the HTML page body white (#FFF), and change the text on the page to black (#000)
        $("body").css({
            background: '#FFF',
            color: '#000'
        });
    });

    // If the black box was clicked under change background
    $("#change_background").on('click', '#background_change_black', function() {

        // Change the background color of the HTML page body to black (#000), and change the text on the page to white (#FFF)
        $("body").css({
            background: '#000',
            color: '#FFF'
        });
    });

    // If the green box was clicked under change background
    $("#change_background").on('click', '#background_change_green', function() {
        
        // Change the background color of the HTML page body to black (#000), and change the text on the page to white (#FFF)
        $("body").css({
            background: '#97e365',
            color: '#FFF'
        });
    });

    // If the play again button is clicked
    $("#drop_space").on('click', '.playAgain', function() {
        
        // Remove tokens, playAgain, Tie
        $(".playedToken").remove();
        $(".playAgain").remove();

        // Reset the game board and token count
        gameboard = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
        tokencount = 1;

        // Set padding of drop space back to zero
        $("#drop_space").css("padding", "0");

        // Add first token of the game to the first dropspace
        $("#drop_space").append("<div class=\"token player1 currenttoken\" id=\"token" + tokencount + "\"></div>");
        
        // Set header text to say it's player 1's turn
        $("#header h1").text("Player 1");

        // Set messages text to instruct player how to drop token
        $("#messages").text("Tap your token to make your play.");
    });
});

