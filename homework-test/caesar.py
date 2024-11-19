# Algandmed
tekst = input("Sisesta tekst mida soovid krüpteerida: ")
tekst_vaike_taht = tekst.lower()
samm = int(input("Mis sammuga krüpteerida? "))
tahestik = "abcdefghijklmnopqrsšzžtuvwõäöüxy"
uus_tekst = ""

tahestik_pikkus = len(tahestik)
tekst_pikkus = len(tekst)

for t in range(tekst_pikkus):
    algne_taht = tekst_vaike_taht[t]
    i_a = tahestik.find(algne_taht) 
    i = i_a + samm
    i = i % tahestik_pikkus
        
    if i_a < 0:
        uus_taht = algne_taht
    else:
        uus_taht = tahestik[i]
        
    uus_tekst = uus_tekst + uus_taht
    
# Tulemus    
print(uus_tekst)