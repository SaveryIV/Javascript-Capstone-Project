const getCommentArr = async (comId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WtRU0pkCN8fwvlF713ba/comments?item_id=${comId}`);
  const resolve = await response.json();
  return resolve;
};

const addCommentToArray = async (id, nametTxt, commentArea) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WtRU0pkCN8fwvlF713ba/comments', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${nametTxt}`,
      comment: `${commentArea}`,
    }),
  });
};

const getCounter = (comId) => {
  const resolve = comId.length;
  return resolve;
};

const comPopUp = (pokemon, i, pokId) => {
  const parent = document.createElement('div');
  parent.classList.add('modal-bg');

  const commentContainer = document.createElement('div');
  commentContainer.classList.add('com-contain'); let commentHtml = '';

  commentHtml += `
  <button class="close-popUp">X</button>
  <div class="img-div-contain">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon[i].id}.png" class="poke-img">
  </div>
  <div class="description">
     <p>weight: ${pokemon[i].weight} kg</p>
     <p>height: ${pokemon[i].height} m</p>
     <p>species: ${pokemon[i].species.name}</p>
     <p>type: ${pokemon[i].types[0].type.name}</p>
     </div>
     <div>
     <p class="label2"> All the Comments [<span class="counter"> </span>]</p>
     <div class="comments">
     
     </div>
      <div class="Add-comment">
      <form class="form">
      <label class="label">Add a comment ✍
      </label>
      <input class="input-name" id="name" type="text" placeholder="Your name">
      <textarea class="input-area" id="txtArea" cols="8" rows="3" placeholder="Your insights"></textarea>
      <button class="btn" type="submit">Comment</button
      ></form>
      </div>
      </div>`;

  commentContainer.innerHTML = commentHtml;
  parent.appendChild(commentContainer);
  document.body.appendChild(parent);

  const btnClose = document.querySelector('.close-popUp');

  btnClose.addEventListener('click', () => {
    parent.remove();
  });

  const inputName = document.querySelector('.input-name');
  const inputArea = document.querySelector('.input-area');
  const formDiv = document.querySelectorAll('.form');
  const commentDiv = document.querySelector('.comments');
  const counterCom = document.querySelector('.counter');

  function displayComments(comments) {
    commentDiv.innerHTML = '';
    counterCom.textContent = getCounter(comments);

    comments.forEach((elemnt) => {
      const div = document.createElement('div');
      div.className = 'comment';

      const nameWithComment = document.createElement('p');
      nameWithComment.className = 'comment';

      const title = `${elemnt.creation_date} ${elemnt.username} : ${elemnt.comment}`;
      nameWithComment.textContent = title;
      div.appendChild(nameWithComment);
      commentDiv.appendChild(div);
    });
  }

  const addElementsToPageFrom = async (comId) => {
    await getCommentArr(comId).then((comments) => {
      displayComments(comments);
    });
  };

  for (let i = 0; i < formDiv.length; i += 1) {
    formDiv[i].addEventListener('submit', (e) => {
      e.preventDefault();

      const pok = Number(pokId);
      const name = document.getElementById('name').value;
      const comment = document.getElementById('txtArea').value;
      addCommentToArray(pok, name, comment).then(() => {
        addElementsToPageFrom(pok);
      });
      inputName.value = '';
      inputArea.value = '';
      inputName.focus();
    });
  }
};

export { comPopUp, getCounter, getCommentArr };