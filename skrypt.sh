#!/bin/bash

PLANSZA=("0" "0" "0" "0" "0" "0" "0" "0" "0")
GRACZ="2"
WYGRANA="0"
POLE=0
PELNA="0"
PUSTE="0"

function wyswietl {
  clear
  echo "Plansza"
  echo "${PLANSZA[0]} | ${PLANSZA[1]} | ${PLANSZA[2]}"
  echo "${PLANSZA[3]} | ${PLANSZA[4]} | ${PLANSZA[5]}"
  echo "${PLANSZA[6]} | ${PLANSZA[7]} | ${PLANSZA[8]}"
}

function pobierzPole {
  echo "Pole dla gracza ${GRACZ}"
  read POLE
}

function sprawdzWygrana {
  for pole in $(seq 0 3 8)
    do
      if [ ${PLANSZA[${pole}]} -eq ${GRACZ} ] && [ ${PLANSZA[${pole}+1]} -eq ${GRACZ} ] && [ ${PLANSZA[${pole}+2]} -eq ${GRACZ} ]
      then
        WYGRANA="1"
      fi
    done
  for pole in {0..2}
    do
      if [ ${PLANSZA[${pole}]} -eq ${GRACZ} ] && [ ${PLANSZA[${pole}+3]} -eq ${GRACZ} ] && [ ${PLANSZA[${pole}+6]} -eq ${GRACZ} ]
      then
        WYGRANA="1"
      fi
    done
  if [ ${PLANSZA[0]} -eq ${GRACZ} ] && [ ${PLANSZA[4]} -eq ${GRACZ} ] && [ ${PLANSZA[8]} -eq ${GRACZ} ]
  then
    WYGRANA="1"
  fi
  if [ ${PLANSZA[2]} -eq ${GRACZ} ] && [ ${PLANSZA[4]} -eq ${GRACZ} ] && [ ${PLANSZA[6]} -eq ${GRACZ} ]
  then
    WYGRANA="1"
  fi
}

function sprawdzCzyPelna {
  PUSTE=0
  for pole in {0..8}
    do
      if [ ${PLANSZA[${pole}]} -eq "0"  ]
      then
        PUSTE=1
      fi
    done
  if [ ${PUSTE} -eq "0" ]
  then
    PELNA=1
  fi
}
while [ ${WYGRANA} -eq "0" ] && [ ${PELNA} -eq "0" ]
do
  wyswietl
  if [ ${GRACZ} -eq "1" ]
  then
    GRACZ="2"
  else
    GRACZ="1"
  fi
  pobierzPole
  if [ ${PLANSZA[${POLE}]} -eq "0" ]
  then
    PLANSZA[${POLE}]=${GRACZ}
  else
    echo "Pole jest zajete"
  fi
  sprawdzWygrana
  sprawdzCzyPelna
done

if [ ${WYGRANA} -eq "1" ]
then
  wyswietl
  echo "Gracz ${GRACZ} wygrywa"
else
  wyswietl
  echo "Remis"
fi
