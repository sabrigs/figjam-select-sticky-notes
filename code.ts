figma.showUI(__html__)
figma.ui.resize(300, 250)

figma.ui.onmessage = msg => {
  
  if (msg.type === 'selectStickyNotes') {

    const [currentSelection] = figma.currentPage.selection


    if (!currentSelection || currentSelection.type !== 'STICKY') {
      figma.notify('You must select a sticky note element to use this plugin.')
      return
    }
    
    const { authorName } = currentSelection
  
    const stickyNodes = figma.currentPage.findAll(element => {
      return element.type === "STICKY" 
        && element.authorName == authorName
    })

    figma.currentPage.selection = stickyNodes
  }
};

