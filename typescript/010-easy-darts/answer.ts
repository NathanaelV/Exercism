// First solution

export function score(x: number, y: number): number {
  const distance = Math.sqrt(x*x + y*y);
  if(distance > 10){
    return 0;
  }else if(distance > 5 ){
    return 1;
  }else if(distance > 1){
    return 5;
  }
  else{
    return 10;
  }
}


// ------------------------------------------------------------------------------

// Second solution

export function score(x: number, y: number): number {
  const dist = Math.sqrt(x * x + y * y);
  if (dist <= 1) return 10;
  if (dist <= 5) return 5;
  if (dist <= 10) return 1;
  return 0;
}


// ------------------------------------------------------------------------------

// Third solution

export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);

  switch (true) {
    case distance <= 1: return 10;
    case distance <= 5: return 5;
    case distance <= 10: return 1;
    default: return 0;
  }
}
