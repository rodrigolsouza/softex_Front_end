'''
Obs: Eu desenvolvi em Python porque como não foi especificada uma lingugagem eu escolhi essa. Não realizei no blockly porque eu não consgio gerar o link para enviar e quando tiro o print ele pega uma tela menor(e fica cortando as parte) onde não dá pra dar zoom e mostrar tanto o código quanto os blocos. Acredito que o google ainda está aperfeiçoando a melhor forma de exibir.
'''

rodas= int(input("Digite o número de rodas do seu veículo: "))
pesoVeiculo=int(input("Digite o peso do seu veículo em Kg: "))
capacidade=int(input("Digite a capacidade máxima de pessoas que seu veículo transporta: "))

categoria=""

if rodas==2 or rodas==3:
    categoria="A"
elif rodas==4 and capacidade<=8 and pesoVeiculo<3500:
    categoria="B"
elif rodas>=4 and (pesoVeiculo>=3500 and  pesoVeiculo<=6000):
    categoria="C"
elif rodas>=4 and capacidade>8:
    categoria="D"
elif rodas>=4 and pesoVeiculo>6000:
    categoria="E"
else:
    print("opção inválida! Digite um número de rodas válido")
print("A melhor categoria que seu veículo se encaixa é: {}" .format(categoria))