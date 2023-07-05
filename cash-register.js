function checkCashRegister(price, cash, cid) {
  let change = [["PENNY", 0],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]];
  let monOwed = cash - price; 
  let insufficientFunds = false;  
  let cidEmpty = false; 
  
while(monOwed.toFixed(2) != 0.00) {
    if(monOwed >= 100.00 && cid[8][1] >= 100.00) {
        change[8][1] += 100.00;
        monOwed -= 100.00; 
        cid[8][1] -= 100.00;     
      } else if (monOwed >= 20.00 && cid[7][1] >= 20.00) {
        if(monOwed < 100.00) {
          change[7][1] += 20.00;
          monOwed -= 20.00; 
          cid[7][1] -= 20.00; 
        } else if (monOwed >= 100.00 && cid[8][1] == 0) {
          change[7][1] += 20.00;
          monOwed -= 20.00; 
          cid[7][1] -= 20.00; 
        }
      } else if (monOwed >= 10.00 && cid[6][1] >= 10.00) {
        if(monOwed < 20.00) {
          change[6][1] += 10.00;
          monOwed -= 10.00; 
          cid[6][1] -= 10.00; 
        } else if (monOwed >= 20.00 && cid[7][1] == 0) {
          change[6][1] += 10.00;
          monOwed -= 10.00; 
          cid[6][1] -= 10.00; 
        }
      } else if (monOwed >= 5.00 && cid[5][1] >= 5.00) {
        if(monOwed < 10.00) {
          change[5][1] += 5.00;
          monOwed -= 5.00; 
          cid[5][1] -= 5.00; 
        } else if (monOwed >= 10.00 && cid[6][1] == 0) {
          change[5][1] += 5.00;
          monOwed -= 5.00; 
          cid[5][1] -= 5.00; 
        }
      } else if (monOwed >= 1.00 && cid[4][1] >= 1.00) {
        if(monOwed < 5.00) {
          change[4][1] += 1.00;
          monOwed -= 1.00; 
          cid[4][1] -= 1.00; 
        } else if (monOwed >= 5.00 && cid[5][1] == 0) {
          change[4][1] += 1.00;
          monOwed -= 1.00; 
          cid[4][1] -= 1.00; 
        }
      } else if (monOwed >= 0.25 && cid[3][1] >= 0.25) {
        if(monOwed < 1.00) {
          change[3][1] += 0.25;
          monOwed -= 0.25; 
          cid[3][1] -= 0.25; 
        } else if (monOwed >= 1.00 && cid[4][1] == 0) {
          change[3][1] += 0.25;
          monOwed -= 0.25; 
          cid[3][1] -= 0.25; 
        }
      } else if (monOwed >= 0.10 && cid[2][1] >= 0.10) {
        if(monOwed < 0.25) {
          change[2][1] += 0.10;
          monOwed -= 0.10; 
          cid[2][1] -= 0.10; 
        } else if (monOwed >= 0.25 && cid[3][1] == 0) {
          change[2][1] += 0.10;
          monOwed -= 0.10; 
          cid[2][1] -= 0.10; 
        }
      } else if (monOwed >= 0.05 && cid[1][1] >= 0.05) {
        if(monOwed < 0.10) {
          change[1][1] += 0.05;
          monOwed -= 0.05; 
          cid[1][1] -= 0.05; 
        } else if (monOwed >= 0.10 && cid[2][1] == 0) {
          change[1][1] += 0.05;
          monOwed -= 0.05; 
          cid[1][1] -= 0.05; 
        }
      } else if (monOwed.toFixed(2) >= 0.01 && cid[0][1].toFixed(2) >= 0.01) {
        if(monOwed < 0.05) {
          change[0][1] += 0.01;
          monOwed -= 0.01; 
          cid[0][1] -= 0.01; 
        } else if (monOwed >= 0.05 && cid[1][1] == 0) {
          change[0][1] += 0.01;
          monOwed -= 0.01; 
          cid[0][1] -= 0.01; 
        }
      } else {
        insufficientFunds = true; 
        break; 
      }
  }

for(let i = 0; i < cid.length; i++) {
  if(cid[i][1].toFixed(2) != 0) {
    break; 
  } else if (i == 8 && cid[i][1].toFixed(2) == 0) {
    cidEmpty = true; 
  }
}

if(insufficientFunds) {
    return {status: "INSUFFICIENT_FUNDS", change: []}; 
  } else if (cidEmpty) {
    change[0][1] = parseFloat(change[0][1].toFixed(2), 10); 
    return {status: "CLOSED", change: change.sort((a,b) => a-b)} 
  } else {
    for(let i = 0; i < change.length; i++) {
      if(change[i][1] == 0) {
        change.splice(i, 1);
        i--; 
      }
    }
    return {status: "OPEN", change: change.sort((a,b) => a-b).reverse()}
  }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);