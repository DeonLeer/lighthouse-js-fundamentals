const judgeVegetable = function(vegetables, metric){
  let score = 0;
  let lead = "";
  for (let i = 0; i < vegetables.length; i++){
    if (vegetables[i][metric] > score){
    score = vegetables[i][metric];
    lead = vegetables[i].submitter;
    }
  }
  return lead;
  }








  const vegetables = [
    {
      submitter: 'Old Man Franklin',
      redness: 10,
      plumpness: 5
    },
    {
      submitter: 'Sally Tomato-Grower',
      redness: 2,
      plumpness: 8
    },
    {
      submitter: 'Hamid Hamidson',
      redness: 4,
      plumpness: 3
    }
  ]
  
  const metric = 'redness'
  console.log(judgeVegetable(vegetables, metric));
