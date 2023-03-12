#!/bin/bash

# Delete folder
echo "Hello Cutie _(:3」∠)_ , $(whoami), $(hostname)"
cd views/css
echo "Deleting my SASS compiler mistakes!You don't deserve to get a salary from Bouke!"
sleep 3
rm -rf *.css.map 2> /dev/null
if [ $? -eq 0 ]; then
  echo "Done!, all your compiler mistakes have been deleted."
  sleep 2
  echo "Closing Terminal!"
  sleep 1
else
  echo "Failed to delete files or missing files exist."
  sleep 1
fi
# open menu.html
exit