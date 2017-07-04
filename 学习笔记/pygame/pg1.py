import pygame
import time
x=pygame.init()
white=(255,255,255)
black=(0,0,0)
c=(125,125,125)
red=(255,0,0)

screen_width=800
screen_height=600

block_width=20
block_height=20

distance=10

lead_x=screen_width/2
lead_y=screen_height/2

lead_x_change=0
lead_y_change=0
gameDisplay=pygame.display.set_mode((screen_width,screen_height))

clock=pygame.time.Clock() #屏幕刷新时间
FPS=30

pygame.key.set_repeat(10) #处理连续的事件，按键等
pygame.display.set_caption("Hello")
gameExit=False

font=pygame.font.SysFont(None,25)

def message_to_screen(msg,color):
    screen_text=font.render(msg,True,color)
    gameDisplay.blit(screen_text,[screen_width/2,screen_height/2])

while not gameExit:
    for event in pygame.event.get():
        #print(event)
        if event.type==pygame.QUIT:
            gameExit=True
        if event.type==pygame.KEYDOWN:
            print(event)
            if event.key==pygame.K_LEFT:
                lead_x_change=-distance
            if event.key==pygame.K_RIGHT:
                lead_x_change=distance
            if event.key==pygame.K_DOWN:
                lead_y_change=distance
            if event.key==pygame.K_UP:
                lead_y_change=-distance
        if event.type==pygame.KEYUP:
            if event.key==pygame.K_LEFT or event.key==pygame.K_RIGHT:
                lead_x_change=0
            if event.key==pygame.K_DOWN or event.key==pygame.K_UP:
                lead_y_change=0
        lead_x+=lead_x_change
        lead_y+=lead_y_change
        if lead_x<=0:
            lead_x=0
        if lead_y<=0:
            lead_y=0
        if lead_y>=screen_height:
            lead_y=screen_height-block_height
        if lead_x>=screen_width:
            lead_x=screen_width-block_width
    gameDisplay.fill(white)
    pygame.draw.rect(gameDisplay,c,[lead_x,lead_y,block_width,block_height])
    pygame.display.update()
    clock.tick(FPS)
message_to_screen("You Leave",red)
pygame.display.update()
time.sleep(10)
pygame.quit()
quit()
