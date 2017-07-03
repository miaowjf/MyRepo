import pygame
x=pygame.init()
white=(255,255,255)
black=(0,0,0)
c=(125,125,125)
lead_x=300
lead_y=300
gameDisplay=pygame.display.set_mode((800,600))

pygame.display.set_caption("Hello")
gameExit=False
while not gameExit:
    for event in pygame.event.get():
        #print(event)
        if event.type==pygame.QUIT:
            gameExit=True
        if event.type==pygame.KEYDOWN:
            print(event)
            if event.key==pygame.K_LEFT:
                lead_x-=10
            if event.key==pygame.K_RIGHT:
                lead_x+=10
            if event.key==pygame.K_DOWN:
                lead_y+=10
            if event.key==pygame.K_UP:
                lead_y-=10
    gameDisplay.fill(white)
    pygame.draw.rect(gameDisplay,c,[lead_x,lead_y,20,20])
    pygame.display.update()
pygame.quit()
quit()
