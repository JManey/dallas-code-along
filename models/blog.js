
//user stories

//ice box - nice to haves
// donation form

//as a user i should see

// donation link
// welcome message
// list of blog articles

//what should a blog look like
// 0 need unique ID
//1 title - MVP
//2 posts - body of text - MVP
//3 date of publish on posts - MVP
//4 shareable link for the posts - share to facebook or linkin
//5 pictures
//6 like button
//7 comments

const blogPosts = [
    {
        id: 1,
        title: 'javascript is awesome',
        post: 'Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra hypothalamus adventus resi hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra max brucks spinal cord terribilem incessu brains zomby.',
        published: 11/14/2019,

    },
    {
        id: 2,
        title: 'javascript is awesome',
        post: 'Cum prefrontal cortex horribilem walking fornix dead resurgere brains de crazed limbic cortex optic nerve sepulcris creaturis, braaaaaiins zombie sicut hypothalamus de grave hippocampus feeding iride brainz et serpens. ',
        published: 07/14/2019,

    },
    {
        id: 3,
        title: 'javascript is awesome',
        post: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror. ',
        published: 11/10/2019,

    },
    
        
  
];

function getAll(){
    return blogPosts;
}





module.exports = {
    getAll,
    
}